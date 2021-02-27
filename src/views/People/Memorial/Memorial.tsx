import { Button, Dialog, DialogContent, GridList, GridListTile, List, ListItem } from "@material-ui/core";
import React, { useState } from "react";
import './Memorial.scss'

function importAll(r: any) {
    return r.keys().map(r);
  }
  
const images = new Map()
const febImages = importAll(require.context('../../../resources/images/memorial/feb', true, /\.(png|jpe?g|svg)$/));
images.set('feb', febImages.map((m:any) => m.default))

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
                        {monthImages.map((i: any) => (
                            <GridListTile key={i} cols={1}>
                                <img src={i} alt={i} />
                            </GridListTile>
                        ))}
                    </GridList>
                </DialogContent>
            </Dialog>
        </div>
    )
}