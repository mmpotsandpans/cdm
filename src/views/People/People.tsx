import React, { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Snackbar, GridListTile, Dialog, DialogContent, Drawer, Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
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

const hasTypeExtraInfo = (type: People) => [People.fallen, People.wounded].includes(type)

const exportPeople = (people: Person[]) => {
    let text = ''
    const props = ['name', 'status', 'tstamp', 'position', 'details', 'age']
    text += props.join('\t') + '\n\n'
    people.forEach((person: any) => {
        props.forEach((prop: any) => {
            text += prop === 'tstamp' && person[prop] ? (new Date(person[prop])).toLocaleDateString() : (person[prop] || '-')
            text += '\t'
        })
        text += '\n\n'
    })
    return text
}

const verifiedIcon = <CheckCircleIcon style={{color: '#115293'}} />

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.fallen)
    const [sortBy, setSortBy] = useState<keyof Person>("tstamp");
    const [filter, setFilter] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(true);
    const [person, setPerson] = useState<Person | undefined>(undefined)
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [controlsExpanded, setControlsExpanded] = React.useState(false);
    const dataExportModalRef = useRef<HTMLElement | undefined>(undefined);
    const controlsRef = useRef<HTMLDivElement | undefined>(undefined)
    const tableRef = useRef<any>(undefined)
    const rows = sort(peopleData.filter(person => person.status === peopleType), [sortBy])
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
    }, [peopleType, controlsExpanded, adjustTableHeight])
    return (
      <div className='PeopleBreakdown'>
          <Accordion expanded={controlsExpanded} ref={controlsRef} onAnimationEnd={adjustTableHeight}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} onClick={() => setControlsExpanded(!controlsExpanded)}>
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
        <TableContainer component={Paper} onClick={() => setControlsExpanded(false)} ref={tableRef}>
            <Table stickyHeader size="small" aria-label="people">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell onClick={() => setSortBy("name")}><TableSortLabel active={sortBy === 'name'}>နာမည်</TableSortLabel></TableCell>
                    <TableCell onClick={() => setSortBy("position")}><TableSortLabel active={sortBy === 'position'}>ရာထူး/နေရပ်</TableSortLabel></TableCell>
                    {hasTypeExtraInfo(peopleType) &&
                        <>
                            <TableCell onClick={() => setSortBy("tstamp")}><TableSortLabel active={sortBy === 'tstamp'}>နေ့ရက်</TableSortLabel></TableCell>
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
                        <div className='name-cell' onClick={() => setPerson(row)}>{row.name} {row.confirmed && verifiedIcon} {row.media && <PhotoLibraryIcon />}</div>
                    </TableCell>
                    <TableCell>{row.position}</TableCell>
                    {hasTypeExtraInfo(peopleType) &&
                        <>
                            <TableCell>{row.tstamp ? (new Date(row.tstamp)).toLocaleDateString() : ''}</TableCell>
                            <TableCell>{row.age}</TableCell>
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
        <Snackbar
            open={snackbarOpen}
            message="
                အချက်အလက်များကို အွန်လိုင်း မှရယူကာ ဖေဖော်ဝါရီလ ၂၈ရက်တွင် နောက်ဆုံးပြင်ဆင်ထားပါသည်။
                အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။
                သတင်းနောက်ထပ်ရရှိပါက၊ သတင်းမှားယွင်းမှုရှိပါက အတတ်နိုင်ဆုံး ပြင်ဆင်ပေးသွားပါမယ်။ ရသမျှသတင်းမှန် အွန်လိုင်းတွင် မျှပေးကြပါ။
            "
            autoHideDuration={10000}
            onClose={() => setSnackbarOpen(false)}
        ></Snackbar>
        <Dialog
            open={!!person?.media}
            onClose={() => setPerson(undefined)}
            className='media-modal'
        >
            <DialogContent>
                {person &&
                    <GridList cols={1}>
                        {person?.media?.map((img) => (
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
                <div>{verifiedIcon} သတင်းမီဒီယာမှ အတည်ပြုထား</div>
                <div><PhotoLibraryIcon /> ဓာတ်ပုံများကို ကလစ်နှိပ်၍ကြည့်နိုင်</div>
            </div>
        </Drawer>
    </div>
  );
}
