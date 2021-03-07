// import { GridList, GridListTile, ListSubheader } from '@material-ui/core'
import { FormControlLabel, Switch } from '@material-ui/core'
import React, { FC, useRef, useState } from 'react'
// import { Person } from '../../models/People'

// const songUrl = process.env.PUBLIC_URL + '/sounds/kabar-ma-kyay-buu.mp3'
const songUrl = process.env.PUBLIC_URL + '/sounds/revolution.mp3'

const stopPropagation: React.MouseEventHandler = (e: any) => {
    e.stopPropagation()
    
}
export interface SaluteProps {
    // people: Person[]
}
export const Salute: FC<SaluteProps> = () => {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const toggleAudio = () => {
        const shouldPlay = !playing
        setPlaying(shouldPlay)
        if (shouldPlay) {
            audioRef.current?.play()
        } else {
            audioRef.current?.pause()
        }
    }
    return (
        <div onClick={stopPropagation}>
            <FormControlLabel
                control={
                <Switch
                    checked={playing}
                    onChange={toggleAudio}
                    name="checkedB"
                    color="primary"
                />
                }
                // label="ကမ္ဘာမကျေသီချင်းဖွင့်"
                label='Revolutionသီချင်းဖွင့်'
            />
            <audio ref={audioRef} loop>
                <source src={songUrl} type='audio/mpeg' />
            </audio>
            {/* <GridList cols={1}>
                {people.map((person, i) => (
                    <span key={i}>
                        <div>{person.name}</div>
                        {person.media?.map((img) => (
                            <GridListTile key={img} cols={1}>
                                <img src={img} alt={person?.name} />
                            </GridListTile>
                        ))}
                    </span>
                ))}
            </GridList> */}
        </div>
    )
}