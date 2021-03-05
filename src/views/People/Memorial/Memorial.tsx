import { Button, Dialog, DialogContent, GridList, GridListTile, List, ListItem, ListSubheader } from "@material-ui/core";
import React, { useState } from "react";
import ReactLinkify from "react-linkify";
import './Memorial.scss'

function importAll(r: any) {
    return r.keys().map(r);
  }

interface MonthImages {
    srcs: string[],
    links: string[]
}
const sortImages = (a: string, b: string) => {
    const ia = a.replace('/cdm/static/media/', '')
    const ib = b.replace('/cdm/static/media/', '')
    return Number.parseInt(ia.split('.')[0]) - Number.parseInt(ib.split('.')[0])
}
// TODO dir import
const images = new Map<string, MonthImages>()
const febImages = importAll(require.context('../../../resources/images/memorial/feb', true, /\.(png|jpe?g|svg|gif)$/i));
images.set('feb', ({
    srcs: febImages.map((m:any) => m.default).sort(sortImages),
    links: [
        'bit.ly/3b22PMF',
        'bit.ly/3sxuL0P',
        'shorturl.at/nqrAS',
        'bit.ly/2NRLyx1'
    ]
}))
const marImages = importAll(require.context('../../../resources/images/memorial/mar', true, /\.(png|jpe?g|svg|gif)$/i));
images.set('mar', ({
    srcs: marImages.map((m:any) => m.default).sort(sortImages),
    links: [
        'bit.ly/3uU6zaV'
    ]
}))

export const Memorial = () => {
    const [month, setMonth] = useState(images.keys().next().value)
    const [galleryOpen, setGalleryOpen] = useState(false)
    const monthImages = images.get(month)
    const handleMonthClick = (month: any) => {
        setMonth(month)
        setGalleryOpen(true)
    }
    return (
        <div className='Memorial'>
            <List>
                {Array.from(images.keys()).map(k => (
                    <ListItem onClick={() => handleMonthClick(k)} key={k}>
                        <Button variant="contained" color="primary">
                            {k} ကိုကြည့်ရန်
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Dialog
                open={galleryOpen}
                onClose={() => setGalleryOpen(false)}
                className='media-modal'
            >
                <DialogContent>
                    <GridList cols={1}>
                        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', width: 'auto' }}>
                            <ListSubheader component='div'>
                                {month}
                            </ListSubheader>
                        </GridListTile>
                        {monthImages?.srcs.map((i: any) => (
                            <GridListTile key={i} cols={1}>
                                <img src={i} alt={i} />
                            </GridListTile>
                        ))}
                        <GridListTile key='credits' className='credits'>
                                <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => (
                                    <a target="blank" href={decoratedHref} key={key}>
                                        {decoratedText}
                                    </a>
                                )}>
                                    {monthImages?.links.map(l => <div key={l}>{l}</div>)}
                                </ReactLinkify>
                        </GridListTile>
                    </GridList>
                </DialogContent>
            </Dialog>
        </div>
    )
}