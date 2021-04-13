import React, { FC, Profiler, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, peopleTypesStrings, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Snackbar, GridListTile, Dialog, DialogContent, Drawer, Accordion, AccordionDetails, AccordionSummary, Typography, CircularProgress, Divider, FormControlLabel, Switch } from '@material-ui/core';
import sort from 'lodash.sortby'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import './People.scss';
import { Modal } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Salute } from '../../components/Salute/Salute';
import { Linkify } from '../../components/Linkify/Linkify';
import { Media } from '../../components/Media/Media';
import { getMediaFormatFromUrl, shouldBlurImage } from '../../utils/mediaUtils';
import { Format } from '../../models/Format';
import { t } from 'ttag'
import { CSVLink } from 'react-csv';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Scroll } from '../../components/Scroll/Scroll';
import throttle from 'lodash.throttle';
import { getDetails, getExportCol, getName, getPersonMedia, getTotals, normalizePeopleData, validateMediaFolders } from '../../utils/personUtils';
import { getLocale } from '../../utils/i18n';
import { normalizeString } from '../../utils/stringUtils';

const locale = getLocale()

const hasLiveData = (type: People) => [People.fallen, People.wounded].includes(type)

const exportPeople = (people: Person[]) => {
    let text = ''
    const props = ['name', 'confirmed', 'date', 'city', 'details', 'age', 'state', 'township']
    text += props.join('\t') + '\n\n'
    people.forEach((person: any) => {
        props.forEach((prop: any) => {
            text += getExportCol(person, prop)
            text += '\t'
        })
        text += '\n\n'
    })
    return text
}

const data2csv = (data: string) => {
    const csv: string[][] = []
    data.split('\n').forEach(line => {
        if (line) {
            const row = line.split('\t')
            csv.push(row)
        }
    })
    return csv
}

const verifiedIcon = <CheckCircleIcon style={{color: '#115293'}} fontSize='small'/>

const normalizedPeopleData = normalizePeopleData(peopleData)

const splitPersonMediaIntoRegularBlurred = (media: string[] | undefined) => {
    if (!media) {
        return undefined
    }
    const [regular, blurred]: [string[], string[]] = [[], []]
    media.forEach(m => {
        if (getMediaFormatFromUrl(m) === Format.video || !shouldBlurImage(m)) {
            regular.push(m)
        }  else {
            blurred.push(m)
        }
    })
    return [regular, blurred]
}

const cachedData: any = {
    [People.detained]: normalizedPeopleData.filter(p => p.status === People.detained)
}

const getNormalizedSortBy = (sortBy: string) => {
    if (locale === 'my') {
        return sortBy
    }
    // TODO: Until fully translated
    if (['name'].includes(sortBy)) {
        return `${locale}${sortBy[0].toLocaleUpperCase()}${sortBy.substr(1)}`
    } else {
        return sortBy
    }
}

const updatedTime = process.env.REACT_APP_INDEX_HASH ? (new Date(parseInt(process.env.REACT_APP_INDEX_HASH) * 1000)) : undefined

const handleProfiler = (
    id: any, // the "id" prop of the Profiler tree that has just committed
    phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: any, // time spent rendering the committed update
    baseDuration: any, // estimated time to render the entire subtree without memoization
    startTime: any, // when React began rendering this update
    commitTime: any, // when React committed this update
    interactions: any // the Set of interactions belonging to this update
) => {
    console.log(phase, actualDuration, baseDuration)
}

const shouldSkipRow = (i: number, row: Person, rows: Person[]) => {
    if (i === 0 || !row.name.includes(normalizeString('အမည်မသိ'))) {
        return false
    }
    const prevRow = rows[i - 1]
    return row.date === prevRow.date && row.city === prevRow.city && prevRow.name.includes(normalizeString('အမည်မသိ'))
}

// get name of consolidated row for unidentified
const getNameCell = (i: number, row: Person, people: Person[]) => {
    const end = people.length - 1
    const name = getName(row)
    if (i === end || !row.name.includes(normalizeString('အမည်မသိ'))) {
        return name
    }
    const date = row.date
    const city = row.city
    let count = 1
    i++
    while (i < end) {
        const curRow = people[i]
        if (date !== curRow.date || city !== curRow.city || !curRow.name.includes(normalizeString('အမည်မသိ'))) {
            break
        }
        i++
        count++
    }
    return count === 1 ? name : `${name} (${count})`
}

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.fallen)
    const [sortBy, setSortBy] = useState<keyof Person>("date");
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')
    const [filter, setFilter] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(true);
    const [personCol, setPersonCol] = useState<[Person | undefined, keyof Person | undefined] | undefined>(undefined)
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [controlsExpanded, setControlsExpanded] = React.useState(false);
    const dataExportModalRef = useRef<HTMLElement | undefined>(undefined);
    const controlsRef = useRef<HTMLDivElement | undefined>(undefined)
    const tableRef = useRef<HTMLTableElement | null>(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<Person[]>([])
    const [showScroll, setShowScroll] = useState(false)
    const [showStateCol, setShowStateCol] = useState(false)
    const [showTownshipCol, setShowTownshipCol] = useState(false)
    const [error, setError] = useState(false)
    const handleTableScroll = throttle(() => {
        setSnackbarOpen(false)
        setControlsExpanded(false)
        setShowScroll(true)
    }, 1000)
    useEffect(() => {
        if (!showScroll) {
            return
        }
        const hideTimeout = window.setTimeout(() => {
            setShowScroll(false)
        }, 5000)
        return () => window.clearTimeout(hideTimeout)
    }, [showScroll])
    const handleFilterChange = debounce(setFilter, 2000)
    useEffect(() => {
        if (cachedData[peopleType]) {
            setData(cachedData[peopleType])
            setError(false)
            return
        }
        setLoading(true)
        if (process.env.NODE_ENV === 'development' && !process.env.REACT_APP_LIVE_DATA) {
            cachedData[peopleType] = normalizedPeopleData.filter(p => p.status === peopleType)
            setLoading(false)
            setData(cachedData[peopleType])
        } else {
            setError(false)
            const url = peopleType === People.fallen ? 'https://heroesofmyanmar.api.stdlib.com/gsheets-database@dev/select/' : 'https://heroesofmyanmar.api.stdlib.com/wounded@dev/select/'
            fetch(url)
                .then(resp => resp.json())
                .then(data => {
                    cachedData[peopleType] = normalizePeopleData(data).map(p => ({
                        ...p,
                        status: peopleType
                    }))
                    setData(cachedData[peopleType])
                    setError(false)
                    validateMediaFolders(cachedData[peopleType], peopleType)
                })
                .catch((e) => {
                    setError(true)
                    console.error(e)
                })
                .finally(() => setLoading(false))   
        }
    }, [peopleType])
    const rows = useMemo(() => {
        const _rows = sort(data.filter((person: Person) => person.status === peopleType), [getNormalizedSortBy(sortBy)])
            .filter((person: any) => {
                for (let key in person) {
                    if (typeof person[key] === 'string' && (person[key]).toLowerCase().match(filter.toLowerCase())) {
                        return true
                    }
                }
                return false
            })
        if (sortDir === 'desc') {
            _rows.reverse()
        }
        return _rows
    }, [data, filter, peopleType, sortBy, sortDir])
    const handleDataCopy = () => {
        if (dataExportModalRef.current) {
            dataExportModalRef.current.querySelector('textarea')?.select()
            document.execCommand('copy')
        } 
    }
    const exportData = useMemo(() => exportPeople(rows), [rows])
    const adjustTableHeight = useCallback(() => {
        if (tableRef.current && controlsRef.current) {
            const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 0
            const controlsHeight = controlsRef.current.getBoundingClientRect().height
            tableRef.current.style.height = `calc(100vh - ${headerHeight + controlsHeight}px)`
        }
    }, [])
    useLayoutEffect(() => {
        const timeout = window.setTimeout(adjustTableHeight, 300)
        return () => window.clearTimeout(timeout)
    }, [peopleType, controlsExpanded, adjustTableHeight, loading])
    const [person, column] = personCol || []
    const personMedia = person && column === 'name'
        ? splitPersonMediaIntoRegularBlurred(getPersonMedia(person, peopleType))
        : undefined
    const handleHeaderClick = (col: keyof Person) => {
        if (col === sortBy) {
            setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
        } else {
            setSortBy(col)
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const totals = useMemo(() => getTotals(rows), [data])
    return (
      <div className='PeopleBreakdown'>
          <Profiler id='table' onRender={handleProfiler}>
          <Accordion expanded={controlsExpanded} ref={controlsRef} onAnimationEnd={adjustTableHeight}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={() => setControlsExpanded(!controlsExpanded)}>
                <Salute />
                <Typography>Controls</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className='controls'>
                    <Breadcrumbs>
                        {peopleTypes.map(pt => (
                            <Link key={pt} color={pt === peopleType ? 'textPrimary' : 'inherit'} href='#' onClick={() => setPeopleType(pt)}>
                                {peopleTypesStrings[pt]}
                            </Link>
                        ))}
                    </Breadcrumbs>
                    <div className='info'>
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        {peopleType === People.detained && <span>{t`AAPPBမှ ပဏာမစာရင်း။ နေ့စဥ်နောက်ဆုံးရ အသေးစိတ်ကို`} <a target='_blank' rel='noopener' href='https://aappb.org/bu?cat=17'>{t`ဒီမှာကြည့်နိုင်ပါသည်။`}</a></span>}
                        {peopleType === People.wounded && <><span>{t`ထိခိုက်သူစာရင်း အတိအကျမရှိသေးပါ`}</span><br></br></>}
                        {/* eslint-disable-next-line react/jsx-no-target-blank */}
                        {hasLiveData(peopleType) && <span>{t`စာရင်းပြင်ချင်ပါက`} <a target='_blank' rel='noopener' href='https://forms.gle/dZ4wKV2gFoPhTRff9'>{t`ဒီမှာပြင်ဆင်ပါ`}</a></span>}
                    </div>
                    <div className='search'>
                        <label>{t`ရှာဖွေရန်`}</label>&nbsp;
                        <input onChange={e => handleFilterChange(e.target.value)} />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showStateCol}
                                    onChange={() => setShowStateCol(!showStateCol)}
                                    name="stateCol"
                                    color="primary"
                                />}
                            label="State Column"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showTownshipCol}
                                    onChange={() => setShowTownshipCol(!showTownshipCol)}
                                    name="townshipCol"
                                    color="primary"
                                />}
                            label="Township Column"
                        />
                    </div>
                    <div className='actions'>
                        <Button variant="contained" color="secondary" onClick={() => setIsExportModalOpen(true)}>{t`Export data`}</Button>
                        <Button variant="contained" color="secondary" onClick={() => setDrawerOpen(true)}>{t`Legend`}</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        {showScroll && <Scroll node={tableRef.current} />}
        {error && <div className='error-msg'>There was an error loading data. Please reload the page again later.</div>}
        {loading && <CircularProgress color="secondary" style={{marginTop: '2em'}} />}
        {!loading && !error && <TableContainer component={Paper} onClick={() => setControlsExpanded(false)} ref={tableRef}  onScroll={handleTableScroll}>
            <Table stickyHeader size="small" aria-label="people">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell onClick={() => handleHeaderClick("name")}><TableSortLabel direction={sortDir} active={sortBy === 'name'}>{t`နာမည်`}</TableSortLabel></TableCell>
                    <TableCell onClick={() => handleHeaderClick("city")}><TableSortLabel direction={sortDir} active={sortBy === 'city'}>{t`မြို့`}</TableSortLabel></TableCell>
                    {hasLiveData(peopleType) &&
                        <>
                            <TableCell onClick={() => handleHeaderClick("date")}><TableSortLabel direction={sortDir} active={sortBy === 'date'}>{t`နေ့`}</TableSortLabel></TableCell>
                            <TableCell onClick={() => handleHeaderClick("age")}><TableSortLabel direction={sortDir} active={sortBy === 'age'}>{t`အသက်`}</TableSortLabel></TableCell>
                            <TableCell onClick={() => handleHeaderClick("details")}><TableSortLabel direction={sortDir} active={sortBy === 'details'}>{t`အသေးစိတ်`}</TableSortLabel></TableCell>
                        </>
                    }
                    {showStateCol && <TableCell onClick={() => handleHeaderClick("state")}><TableSortLabel direction={sortDir} active={sortBy === 'state'}>{t`တိုင်း/ပြည်နယ်`}</TableSortLabel></TableCell>}
                    {showTownshipCol && <TableCell onClick={() => handleHeaderClick("township")}><TableSortLabel direction={sortDir} active={sortBy === 'township'}>{t`မြို့နယ်/ကျေးရွာ`}</TableSortLabel></TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {/* TODO: fix key after we win this */}
                {rows.map((row, i) => {
                    if (shouldSkipRow(i, row, rows)) {
                        return null
                    }
                    return (
                        <TableRow key={row.name + '-' + i}>
                            <TableCell component="th" scope="row">
                            {i + 1}
                            </TableCell>
                            <TableCell component="th" scope="row" className='sticky-column'>
                                <div className='name-cell' onClick={() => setPersonCol([row, 'name'])}>{getNameCell(i, row, rows)} {row.confirmed && verifiedIcon} {getPersonMedia(row, peopleType) && <PhotoCameraIcon fontSize='small' />}</div>
                            </TableCell>
                            <TableCell title={row.city ? `Total ${totals.city[row.city]}` : ''}>{row.city}</TableCell>
                            {hasLiveData(peopleType) &&
                                <>
                                    <TableCell title={row.date ? `Total ${totals.date[row.date]}` : ''}>{row.date ? (new Date(parseInt(row.date))).toLocaleDateString() : ''}</TableCell>
                                    <TableCell>{row.age || '-'}</TableCell>
                                    <TableCell onClick={() => setPersonCol([row, 'details'])}>
                                        <Linkify><div className='details'>{getDetails(row)}</div></Linkify>                                    
                                    </TableCell>
                                </>
                            }
                            {showStateCol && <TableCell title={row.state ? `Total ${totals.state[row.state]}` : ''}>{row.state}</TableCell>}
                            {showTownshipCol && <TableCell title={row.township ? `Total ${totals.township[row.township]}` : ''}>{row.township}</TableCell>}
                        </TableRow>
                    )
                })}
                <TableRow><TableCell colSpan={5}>{t`ရုပ်ပုံများ နောက်ဆုံးပြင်ဆင်ချိန်`} {updatedTime?.toLocaleDateString()} {updatedTime?.toLocaleTimeString()}</TableCell></TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        }   
        <Snackbar
            open={snackbarOpen}
            message={
                <div style={{fontSize: '0.8em', textAlign: 'left'}}>
                    <p>{t`သတင်းမှားယွင်းမှုရှိပါက အတတ်နိုင်ဆုံး ပြင်ဆင်ပေးသွားပါမယ်။ သတင်းပေးပို့၊ ဖြည့်စွက်လိုပါက Controlsကိုနှိပ်ပြီး Formဖြည့်ပေးနိုင်ပါတယ်။`}</p>
                    <p>{t`သတင်းပေးရှာဖွေမှုလွယ်ကူစေရန် ကျဆုံးသွားသူများအတွက် #mmFallenHeroes နဲ့ ပျောက်ဆုံးနေသူများအတွက် #mmMissingHeroes ဟုအသုံးပြုပေးကြပါ။`}</p>
                    <p>{t`ကျန်ရစ်သူများကို ကူညီလိုပါက`} <NavLink to="/resources" style={{color: 'yellowgreen'}}>link</NavLink></p>
                    <NavLink to='/memorial' style={{color: 'yellow', fontSize: '1rem'}}>Memorial</NavLink> page video backgroundတွင် ကိုယ်တိုင်လုပ်ထားသည်ကို မျှဝေချင်ပါကလည်း Formတွင်ပို့ပေးနိုင်ပါသည်။
                    <NavLink to='/api' style={{color: 'yellowgreen', fontSize: '1rem', textAlign: 'center', display: 'block'}}>Data API</NavLink>
                    <NavLink to='/about' style={{color: 'yellow', fontSize: '1rem', textAlign: 'center', display: 'block'}}>Our road map (Apr 8 Update)</NavLink>
                </div>
            }
            autoHideDuration={20000}
            onClose={() => setSnackbarOpen(false)}
        ></Snackbar>
        <Dialog
            open={!!personMedia}
            onClose={() => setPersonCol(undefined)}
            className='media-modal'
        >
            <DialogContent>
                {person &&
                    <GridList cols={1}>
                        {personMedia?.[0]?.map((m) => (
                            <GridListTile key={m} cols={1}>
                                <Media src={m} alt={person?.name || m} />
                            </GridListTile>
                        ))}
                        {personMedia?.[1].length &&
                            <GridListTile className='media-warning'>
                                <Divider />
                                <div>{t`အောက်ပါ ရုပ်ပုံများသည် အလွန့်အလွန် အမြင်မတော် (သို့) သွေးထွက်သံယိုများနိုင်ပါသည်။ သူရဲကောင်းတို့ ပေးဆပ်ခဲ့ရမှုကို မှတ်တမ်းအရ သာ တင်ပါသည်။ မိသားစုမှ တောင်းဆိုပါက အမြန်ဆုံး ဖြုတ်ချပါမည်။`}</div>
                            </GridListTile>
                        }
                        {personMedia?.[1]?.map((m) => (
                            <GridListTile key={m} cols={1}>
                                <Media src={m} alt={person?.name || m} />
                            </GridListTile>
                        ))}
                    </GridList>
                }
            </DialogContent>
        </Dialog>
        <Dialog
            open={!!(person && column === 'details' && person.details)}
            onClose={() => setPersonCol(undefined)}
            className='media-modal'
        >
            <DialogContent>
                <div className='name-in-details'>{getName(person)}</div><br />
                <div><Linkify>{person?.details}</Linkify></div>
            </DialogContent>
        </Dialog>
        <Modal ref={dataExportModalRef} className='export-modal' open={isExportModalOpen} onClose={() => setIsExportModalOpen(false)}>
            <>
                <pre>
                    <div>Copy <FileCopyIcon onClick={handleDataCopy} /> <CSVLink data={data2csv(exportData)} filename='heroes.csv'>Download CSV</CSVLink></div>
                    {exportData}
                </pre>
                <textarea defaultValue={exportData}></textarea>
            </>
        </Modal>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor='bottom'>
            <div className='legend'>
                <div>{verifiedIcon} {t`သတင်းမီဒီယာမှ အတည်ပြုထားခြင်း၊ ဓာတ်ပုံ ဗီဒီယို၊ တိုက်ရိုက်လင့်ခ်ရှိခြင်း`}</div>
                <div><PhotoCameraIcon /> {t`ဓာတ်ပုံများကို ကလစ်နှိပ်၍ကြည့်နိုင်`}</div>
            </div>
        </Drawer>
        </Profiler>
    </div>
  );
}
