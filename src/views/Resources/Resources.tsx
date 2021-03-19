import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import React, { FC } from "react"
import {t} from 'ttag'
import './Resources.scss'

const resources = {
    'Nway Oo Heroes': 'https://nwayooheroes.org',
    'Memoirs of the Fallen': 'https://memoirsofthefallen.com',
    'Honor Heroes Myanmar': 'https://www.facebook.com/pg/HonorHeroesMyanmar/',
    'Lu Pyout': 'https://lupyout.com',
    'How Many Dead Bodies': 'https://www.facebook.com/How-many-dead-bodies-112813997526188/',
    'Myanmar Spring Revolution Fallen Stars': 'https://bit.ly/myanmarspring22222',
    'Myanmar Freedom Memorial': 'https://myanmarfreedommemorial.info/'
}
export const Resources: FC<{}> = () => {
    return (
        <div className='Resources'>
            <h1>{t`အကူအညီပေးနိုင်သော၊ မှတ်တမ်းတင်ထားသော နေရာများ (ဒီဆိုက်နှင့် မသက်ဆိုင်)`}</h1>
            <List>
                {Object.entries(resources).map(([name, link]) => (
                    // eslint-disable-next-line react/jsx-no-target-blank
                    <ListItem key={name}><a href={link} target='_blank' rel='noopener'>{name}</a></ListItem>
                ))}
            </List>
        </div>
    )
}