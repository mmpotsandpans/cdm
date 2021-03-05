import React, { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Snackbar, GridListTile, Dialog, DialogContent, Drawer, Accordion, AccordionDetails, AccordionSummary, Typography, CircularProgress } from '@material-ui/core';
import sort from 'lodash.sortby'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import './People.scss';
import { Modal } from '@material-ui/core';
import { GridList } from '@material-ui/core';
import { Button } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ReactLinkify from 'react-linkify';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Salute } from '../../components/Salute/Salute';
import { fallenImages } from '../../resources/fallen';

const hasTypeExtraInfo = (type: People) => [People.fallen, People.wounded].includes(type)

const exportPeople = (people: Person[]) => {
    let text = ''
    const props = ['name', 'confirmed', 'date', 'city', 'details', 'age']
    text += props.join('\t') + '\n\n'
    people.forEach((person: any) => {
        props.forEach((prop: any) => {
            text += prop === 'date' && person[prop] ? (new Date(parseInt(person[prop]))).toLocaleDateString() : (person[prop] || '-')
            text += '\t'
        })
        text += '\n\n'
    })
    return text
}

const verifiedIcon = <CheckCircleIcon style={{color: '#115293'}} fontSize='small'/>

// there's font encoding ordering issue for some names, so use english name for those
const getPersonMedia = (person: Person | undefined, peopleType: People) => {
    if (peopleType === People.fallen) {
        return fallenImages.get(person?.folder || person?.name || '')
    } else {
        return person?.media
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
        age: p.age ? parseInt(p.age.toString()) : undefined
    }
})

const normalizedPeopleData = normalizePeopleData(peopleData)

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.fallen)
    const [sortBy, setSortBy] = useState<keyof Person>("date");
    const [filter, setFilter] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(true);
    const [person, setPerson] = useState<Person | undefined>(undefined)
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [controlsExpanded, setControlsExpanded] = React.useState(false);
    const dataExportModalRef = useRef<HTMLElement | undefined>(undefined);
    const controlsRef = useRef<HTMLDivElement | undefined>(undefined)
    const tableRef = useRef<any>(undefined)
    const [fallenData, setFallenData] = useState<Person[]>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://heroesofmyanmar.api.stdlib.com/gsheets-database@dev/select/')
            .then(resp => resp.json())
            .then(data => {
                setFallenData(normalizePeopleData(data).map(p => ({
                ...p,
                status: People.fallen
                })))
            })
            .finally(() => setLoading(false))
    }, [])
    // peopleData is static, but we fetch fallen list live from google sheets
    const data = peopleType === People.fallen ? fallenData : normalizedPeopleData
    const rows = sort(data.filter(person => person.status === peopleType), [sortBy])
        .filter((person: any) => {
            for (let key in person) {
                if (typeof person[key] === 'string' && (person[key]).toLowerCase().match(filter.toLowerCase())) {
                    return true
                }
            }
            return false
        })
        .reverse()
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
    const personMedia = getPersonMedia(person, peopleType)
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
                                {pt.toString()}
                            </Link>
                        ))}
                    </Breadcrumbs>
                    <div className='info'>
                        {peopleType === People.detained && <span>AAPPBမှ ပဏာမစာရင်း။ နေ့စဥ်နောက်ဆုံးရ အသေးစိတ်ကို <a target='_blank' rel='noreferrer' href='https://aappb.org/bu?cat=17'>ဒီမှာကြည့်နိုင်ပါသည်။</a></span>}
                        {peopleType === People.wounded && <><span>ထိခိုက်သူစာရင်း အတိအကျမရှိသေးပါ</span><br></br></>}
                        {hasTypeExtraInfo(peopleType) && <span>စာရင်းပြင်ချင်ပါက <a target='_blank' rel='noreferrer' href='https://forms.gle/dZ4wKV2gFoPhTRff9'>ဒီမှာပြင်ဆင်ပါ</a></span>}
                    </div>
                    <div className='search'>
                        <label>ရှာဖွေရန်</label>&nbsp;
                        <input value={filter} onChange={e => setFilter(e.target.value)} />
                    </div>
                    <div className='actions'>
                        <Button variant="contained" color="secondary" onClick={() => setIsExportModalOpen(true)}>Export data</Button>
                        <Button variant="contained" color="secondary" onClick={() => setDrawerOpen(true)}>Legend</Button>
                    </div>
                </div>
            </AccordionDetails>
        </Accordion>
        {loading && <CircularProgress color="secondary" style={{marginTop: '1em'}} />}
        {!loading && <TableContainer component={Paper} onClick={() => setControlsExpanded(false)} ref={tableRef}>
            <Table stickyHeader size="small" aria-label="people">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell onClick={() => setSortBy("name")}><TableSortLabel active={sortBy === 'name'}>နာမည်</TableSortLabel></TableCell>
                    <TableCell onClick={() => setSortBy("city")}><TableSortLabel active={sortBy === 'city'}>ရာထူး/နေရပ်</TableSortLabel></TableCell>
                    {hasTypeExtraInfo(peopleType) &&
                        <>
                            <TableCell onClick={() => setSortBy("date")}><TableSortLabel active={sortBy === 'date'}>နေ့ရက်</TableSortLabel></TableCell>
                            <TableCell onClick={() => setSortBy("age")}><TableSortLabel active={sortBy === 'age'}>အသက်</TableSortLabel></TableCell>
                            <TableCell onClick={() => setSortBy("details")}><TableSortLabel active={sortBy === 'details'}>အသေးစိတ်</TableSortLabel></TableCell>
                        </>
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, i) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {i + 1}
                    </TableCell>
                    <TableCell component="th" scope="row" className='sticky-column'>
                        <div className='name-cell' onClick={() => setPerson(row)}>{row.name} {row.confirmed && verifiedIcon} {getPersonMedia(row, peopleType) && <PhotoLibraryIcon fontSize='small' />}</div>
                    </TableCell>
                    <TableCell>{row.city}</TableCell>
                    {hasTypeExtraInfo(peopleType) &&
                        <>
                            <TableCell>{row.date ? (new Date(parseInt(row.date))).toLocaleDateString() : ''}</TableCell>
                            <TableCell>{row.age || '-'}</TableCell>
                            <TableCell>
                                <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => (
                                    <a target="blank" href={decoratedHref} key={key}>
                                        {decoratedText}
                                    </a>
                                )}>
                                    {row.details}
                                </ReactLinkify>
                            </TableCell>
                        </>
                    }
                </TableRow>
                ))}
                <TableRow><TableCell colSpan={5}>End of list</TableCell></TableRow>
            </TableBody>
            </Table>
        </TableContainer>
        }   
        <Snackbar
            open={snackbarOpen}
            message={
                <div>
                    <p>အချက်အလက်များကို အွန်လိုင်း မှရယူကာ မတ်လ 3 ရက်တွင် နောက်ဆုံးပြင်ဆင်ထားပါသည်။</p>
                    <p>သတင်းနောက်ထပ်ရရှိပါက၊ သတင်းမှားယွင်းမှုရှိပါက အတတ်နိုင်ဆုံး ပြင်ဆင်ပေးသွားပါမယ်။ သတင်းပေးပို့၊ ဖြည့်စွက်လိုပါက Controlsကိုနှိပ်ပြီး Formဖြည့်ပေးနိုင်ပါတယ်။</p>
                    <p>သတင်းပေးရှာဖွေမှုလွယ်ကူစေရန် ကျဆုံးသွားသူများအတွက် #mmFallenHeroes နဲ့ ပျောက်ဆုံးနေသူများအတွက် #mmMissingHeroes ဟုအသုံးပြုပေးကြပါ။</p>
                    <p>အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။</p>
                    <p>သတိ! ဗီဒီယို ဓာတ်ပုံများသည် သွေးထွက်သံယိုများ ပါနိုင်ပါသည်။</p>
                </div>
            }
            autoHideDuration={20000}
            onClose={() => setSnackbarOpen(false)}
        ></Snackbar>
        <Dialog
            open={!!personMedia}
            onClose={() => setPerson(undefined)}
            className='media-modal'
        >
            <DialogContent>
                {person &&
                    <GridList cols={1}>
                        {personMedia?.map((img) => (
                            <GridListTile key={img} cols={1}>
                            <img src={img} alt={person?.name} />
                            </GridListTile>
                        ))}
                    </GridList>
                }
            </DialogContent>
        </Dialog>
        <Modal ref={dataExportModalRef} className='export-modal' open={isExportModalOpen} onClose={() => setIsExportModalOpen(false)}>
            <>
                <pre>
                    <div>Copy <FileCopyIcon onClick={handleDataCopy} /></div>
                    {exportData}
                </pre>
                <textarea defaultValue={exportData}></textarea>
            </>
        </Modal>
        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor='bottom'>
            <div className='legend'>
                <div>{verifiedIcon} သတင်းမီဒီယာမှ အတည်ပြုထားခြင်း၊ ဓာတ်ပုံ ဗီဒီယို၊ တိုက်ရိုက်လင့်ခ်ရှိခြင်း</div>
                <div><PhotoLibraryIcon /> ဓာတ်ပုံများကို ကလစ်နှိပ်၍ကြည့်နိုင်</div>
            </div>
        </Drawer>
    </div>
  );
}
