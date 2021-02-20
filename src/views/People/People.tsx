import React, { FC, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, Snackbar } from '@material-ui/core';
import sort from 'lodash.sortby'
import './People.scss';

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.fallen)
    const [sortBy, setSortBy] = useState<keyof Person>("name");
    const [filter, setFilter] = useState('')
    const [snackbarOpen, setSnackbarOpen] = useState(true);
    const rows = sort(peopleData.filter(person => person.status === peopleType), [sortBy])
        .filter((person: any) => {
            for (let key in person) {
                if (typeof person[key] === 'string' && (person[key]).toLowerCase().match(filter.toLowerCase())) {
                    return true
                }
            }
            return false
        })
  return (
      <div className='PeopleBreakdown'>
        <Breadcrumbs aria-label="breadcrumb">
            {peopleTypes.map(pt => (
                <Link key={pt} color={pt === peopleType ? 'textPrimary' : 'inherit'} href='#' onClick={() => setPeopleType(pt)}>
                    {pt.toString()}
                </Link>
            ))}
        </Breadcrumbs>
        <div className='search'>
            <label>ရှာဖွေရန်</label>&nbsp;
            <input value={filter} onChange={e => setFilter(e.target.value)} />
        </div>
        <TableContainer component={Paper}>
            <Table stickyHeader size="small" aria-label="people">
            <TableHead>
                <TableRow>
                <TableCell></TableCell>
                <TableCell onClick={() => setSortBy("name")}><TableSortLabel active={sortBy === 'name'}>နာမည်</TableSortLabel></TableCell>
                <TableCell onClick={() => setSortBy("position")}><TableSortLabel active={sortBy === 'position'}>ရာထူး/နေရပ်</TableSortLabel></TableCell>
                {peopleType === People.fallen &&
                    <>
                        <TableCell onClick={() => setSortBy("age")}><TableSortLabel active={sortBy === 'age'}>အသက်</TableSortLabel></TableCell>
                        <TableCell onClick={() => setSortBy("tstamp")}><TableSortLabel active={sortBy === 'tstamp'}>ကျဆုံးချိန်</TableSortLabel></TableCell>
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
                    {row.name}
                    </TableCell>
                    <TableCell>{row.position}</TableCell>
                    {peopleType === People.fallen &&
                        <>
                            <TableCell>{row.age}</TableCell>
                            <TableCell>{row.tstamp ? (new Date(row.tstamp)).toLocaleDateString() : ''}</TableCell>
                            <TableCell>{row.details}</TableCell>
                        </>
                    }
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
        <Snackbar
            open={snackbarOpen}
            message="အချက်အလက်များကို အွန်လိုင်း မှရယူကာ ဖေဖော်ဝါရီလ ၂၀ရက်တွင် နောက်ဆုံးပြင်ဆင်ထားပါသည်။ အာဇာနည်များအား ဝမ်းနည်းလှစွာဖြင့် ဂုဏ်ပြုမှတ်တမ်းတင်အပ်ပါသည်။ သတင်းမှားယွင်းမှုရှိပါက အတတ်နိုင်ဆုံး ပြင်ဆင်ပေးသွားပါမယ်။"
            autoHideDuration={10000}
            onClose={() => setSnackbarOpen(false)}
        ></Snackbar>
    </div>
  );
}
