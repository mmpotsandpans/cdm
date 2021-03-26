import { Typography } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PieChartIcon from '@material-ui/icons/PieChart';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ListIcon from '@material-ui/icons/List';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InfoIcon from '@material-ui/icons/Info';
import './Sidebar.scss'
import { t } from 'ttag';

export const Sidebar = () => {
    const [open, setOpen] = useState(false)
    const handleAnchorClick = (e: React.MouseEvent) => {
        if (e.target instanceof HTMLAnchorElement) {
            setOpen(false)
        }
    }
    return (
        <>
            <ArrowForwardIosIcon className='sidebar-toggle' onClick={() => setOpen(!open)}/>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <div className='sidebar' onClick={handleAnchorClick}>
                    <Typography variant="h6">
                        <NavLink to="/"><ListIcon /> {t`နွေဦးတော်လှန်ရေးအာဇာနည်များ`}</NavLink>
                    </Typography>
                    <Typography variant="h6">
                        <NavLink to="/resources"><AccountBalanceIcon /> Resources/Organizations</NavLink>
                    </Typography>
                    <Typography variant="h6">
                        <NavLink to="/"><PhotoLibraryIcon /> {t`စုပေါင်းမှတ်တမ်းများ`}</NavLink>
                    </Typography>
                    <Typography variant="h6">
                        <NavLink to="/graphs"><PieChartIcon /> Graphs</NavLink>
                    </Typography>
                    <Typography variant="h6">
                        <NavLink to="/about"><InfoIcon /> About</NavLink>
                    </Typography>
                </div>
            </Drawer>
        </>
    )
}