import TranslateIcon from '@material-ui/icons/Translate';
import Popover from '@material-ui/core/Popover';
import React, { FC, useState } from 'react';
import { getLocale, localeNames, locales, setLocale } from '../../utils/i18n';
import './Language.scss'
import { List, ListItem, ListItemText } from '@material-ui/core';

const locale = getLocale()
export const Language: FC<{}> = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const handleChange = (newLocale: string) => {
        if (locale === newLocale) {
            return
        }
        setLocale(newLocale)
        document.location.href = window.location.href.replace(/\?.*/, '')
        window.location.reload()
    }
    const handleClick = (e: React.MouseEvent) => {
        setAnchorEl(e.currentTarget as HTMLElement)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <div className='Language'>
            <TranslateIcon onClick={handleClick} />
            <Popover
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List className='languages'>
                    {locales.map((l, i) => (
                        <ListItem button onClick={() => handleChange(l)} key={l} className={l === locale ? 'selected' : ''}>
                            <ListItemText primary={localeNames[i]} />
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </div>
    )
}