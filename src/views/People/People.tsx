import React, { FC, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, peopleTypesStrings, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Snackbar, GridListTile, Dialog, DialogContent, Drawer, Accordion, AccordionDetails, AccordionSummary, Typography, CircularProgress, Divider } from '@material-ui/core';
import sort from 'lodash.sortby'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import './People.scss';
import { Modal } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Salute } from '../../components/Salute/Salute';
import { fallenImages } from '../../resources/fallen';
import { Linkify } from '../../components/Linkify/Linkify';
import { Media } from '../../components/Media/Media';
import { getMediaFormatFromUrl, shouldBlurImage } from '../../utils/mediaUtils';
import { Format } from '../../models/Format';
import { woundedImages } from '../../resources/wounded';
import { t } from 'ttag'
import { getLocale, getLocaleCity } from '../../utils/i18n';
import { CSVLink } from 'react-csv';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Scroll } from '../../components/Scroll/Scroll';
import throttle from 'lodash.throttle';

const hasLiveData = (type: People) => [People.fallen, People.wounded].includes(type)

const exportPeople = (people: Person[]) => {
    let text = ''
    const props = ['name', 'confirmed', 'date', 'city', 'details', 'age']
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

const getPersonMedia = (person: Person | undefined, peopleType: People) => {
    let media
    if (peopleType === People.detained) {
        media = person?.media
    } else {
        const images = peopleType === People.fallen ? fallenImages : woundedImages
        media = images.get(person?.folder?.trim() || person?.name.trim() || '')
    }
    return media?.filter(m => !/hidden/.test(m))
}

const locale = getLocale()

const getName = (p: Person | undefined) => {
    if (!p) {
        return undefined
    }
    const defaultName = `${p.honorific || ''}${p.name}`
    if (locale === 'my') {
        return defaultName
    } else {
        const localeName = `${locale}Name`
        return (p as any)[localeName] ? (p as any)[localeName] : defaultName
    }
}

const getDetails = (p: Person | undefined) => {
    if (!p) {
        return undefined
    }
    let details
    if (locale === 'my') {
        details = p.details
    } else {
        const localeDetails = `${locale}Details`
        details = (p as any)[localeDetails] ? (p as any)[localeDetails] : p.details
    }
    return details?.replace(/https?:\/\//g, '')
}

const getExportCol = (p: Person, col: keyof Person) => {
    if (col === 'name') {
        return getName(p)
    } else if (col === 'details') {
        return getDetails(p)
    } else if (col === 'date' && p[col]) {
        return (new Date(parseInt(p[col] || ''))).toLocaleDateString()
    } else {
        return p[col] || '-'
    }
}

const normalizePeopleData = (data: Person[]) => data.map(p => {
    let date = undefined
    if (p.date) {
        const [day, month, year] = p.date.split('/').map(i => parseInt(i))
        date = (new Date(year, month - 1, day)).getTime().toString()
    }
    return {
        ...p,
        confirmed: p.confirmed?.toString().toLowerCase() === 'true',
        date,
        age: p.age ? parseInt(p.age.toString()) : undefined,
        details: getDetails(p),
        city: getLocaleCity(p.city)
    }
})

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

const getTotals = (people: Person[])  => {
    const totals: any = {
        date: {},
        city: {}
    }
    people.forEach((person: Person) => {
        if (person.date) {
            totals.date[person.date] = (totals.date[person.date] || 0) + 1
        }
        if (person.city) {
            totals.city[person.city] = (totals.city[person.city] || 0) + 1
        }
    })
    return totals
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
                })
                .catch((e) => {
                    setError(true)
                    console.error(e)
                })
                .finally(() => setLoading(false))   
        }
    }, [peopleType])
    const rows = sort(data.filter((person: Person) => person.status === peopleType), [getNormalizedSortBy(sortBy)])
        .filter((person: any) => {
            for (let key in person) {
                if (typeof person[key] === 'string' && (person[key]).toLowerCase().match(filter.toLowerCase())) {
                    return true
                }
            }
            return false
        })
    if (sortDir === 'desc') {
        rows.reverse()
    }
    const handleDataCopy = () => {
        if (dataExportModalRef.current) {
            dataExportModalRef.current.querySelector('textarea')?.select()
            document.execCommand('copy')
        } 
    }
    const exportData = exportPeople(rows)
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
                </TableRow>
            </TableHead>
            <TableBody>
                {/* TODO: fix key after we win this */}
                {rows.map((row, i) => (
                <TableRow key={row.name + '-' + i}>
                    <TableCell component="th" scope="row">
                    {i + 1}
                    </TableCell>
                    <TableCell component="th" scope="row" className='sticky-column'>
                        <div className='name-cell' onClick={() => setPersonCol([row, 'name'])}>{getName(row)} {row.confirmed && verifiedIcon} {getPersonMedia(row, peopleType) && <PhotoLibraryIcon fontSize='small' />}</div>
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
                </TableRow>
                ))}
                <TableRow><TableCell colSpan={5}>{t`ရုပ်ပုံများ နောက်ဆုံးပြင်ဆင်ချိန်`} {updatedTime?.toLocaleDateString()} {updatedTime?.toLocaleTimeString()}</TableCell></TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        }   
        <Snackbar
            open={snackbarOpen}
            message={
                <div style={{fontSize: '0.8em', textAlign: 'left'}}>
                    <p>{t`အချက်အလက်များ၊ ရုပ်ပုံများကို အွန်လိုင်းမှ ရယူကာ အလျင်မှီသလို ထည့်သွင်းပြင်ဆင်ထားပါသည်။ မူပိုင်ခွင့်သည် ပိုင်ရှင်များနှင့်သာ သက်ဆိုင်ပါသည်။`}</p>
                    <p>{t`သတင်းမှားယွင်းမှုရှိပါက အတတ်နိုင်ဆုံး ပြင်ဆင်ပေးသွားပါမယ်။ သတင်းပေးပို့၊ ဖြည့်စွက်လိုပါက Controlsကိုနှိပ်ပြီး Formဖြည့်ပေးနိုင်ပါတယ်။`}</p>
                    <p>{t`သတင်းပေးရှာဖွေမှုလွယ်ကူစေရန် ကျဆုံးသွားသူများအတွက် #mmFallenHeroes နဲ့ ပျောက်ဆုံးနေသူများအတွက် #mmMissingHeroes ဟုအသုံးပြုပေးကြပါ။`}</p>
                    <p>{t`ကျန်ရစ်သူများကို ကူညီလိုပါက`} <NavLink to="/resources" style={{color: 'yellowgreen'}}>link</NavLink></p>
                    <p style={{textAlign: 'center'}}>{t`အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။`}</p>
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
                                <div>{t`အောက်ပါ ရုပ်ပုံများသည် အလွန် အမြင်မတော် (သို့) သွေးထွက်သံယိုများပါသည်။ သူရဲကောင်းတို့ ပေးဆပ်ခဲ့ရမှုကို မှတ်တမ်းအရ သာ တင်ပါသည်။ မိသားစုမှ တောင်းဆိုပါက အမြန်ဆုံး ဖြုတ်ချပါမည်။`}</div>
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
                <div><PhotoLibraryIcon /> {t`ဓာတ်ပုံများကို ကလစ်နှိပ်၍ကြည့်နိုင်`}</div>
            </div>
        </Drawer>
    </div>
  );
}
