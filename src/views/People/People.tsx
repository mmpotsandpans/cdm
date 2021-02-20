import React, { FC, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleData, peopleTypes, Person } from '../../models/People';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel } from '@material-ui/core';
import sort from 'lodash.sortby'
import './People.scss';

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.detained)
    const [sortBy, setSortBy] = useState<keyof Person>("position");
    const rows = sort(peopleData.filter(person => person.status === peopleType), [sortBy])
  return (
      <div className='PeopleBreakdown'>
        <div>
            <p>အချက်အလက်များကို Facebook မှရယူကာ ဖေဖော်ဝါရီလ ၁၉ရက်တွင် နောက်ဆုံးပြင်ဆင်ထားပါသည်။</p>
            <p>အရေးတော်ပုံ အောင်ရမည်။</p>
        </div>
        <hr></hr>
        <Breadcrumbs aria-label="breadcrumb">
            {peopleTypes.map(pt => (
                <Link key={pt} color={pt === peopleType ? 'textPrimary' : 'inherit'} href='#' onClick={() => setPeopleType(pt)}>
                    {pt.toString()}
                </Link>
            ))}
        </Breadcrumbs>
        <TableContainer component={Paper}>
            <Table stickyHeader size="small" aria-label="people">
            <TableHead>
                <TableRow>
                <TableCell></TableCell>
                <TableCell onClick={() => setSortBy("name")}><TableSortLabel active={sortBy === 'name'}>နာမည်</TableSortLabel></TableCell>
                <TableCell onClick={() => setSortBy("position")}><TableSortLabel active={sortBy === 'position'}>ရာထူး/နေရပ်</TableSortLabel></TableCell>
                {peopleType === People.fallen && <TableCell onClick={() => setSortBy("tstamp")}><TableSortLabel active={sortBy === 'tstamp'}>ကျဆုံးချိန်</TableSortLabel></TableCell>}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, i) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                    {i + 1}
                    </TableCell>
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.position}</TableCell>
                    {row.tstamp && <TableCell align='right'>{(new Date(row.tstamp)).toLocaleDateString()}</TableCell>}
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    </div>
  );
}
