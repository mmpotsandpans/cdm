import React, { FC, useState } from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { People, peopleTypes } from '../../models/People';

export const PeopleBreakdown: FC<{}> = () => {
    const [peopleType, setPeopleType] = useState<People>(People.detained)
  return (
    <Breadcrumbs aria-label="breadcrumb">
        {peopleTypes.map(pt => (
            <Link key={pt} color={pt === peopleType ? 'textPrimary' : 'inherit'} href='#' onClick={() => setPeopleType(pt)}>
                {pt.toString()}
            </Link>
        ))}
    </Breadcrumbs>
  );
}
