import { FC, useState } from "react"
import { Format } from "../../models/Format"
import { getUrlMediaFormat } from "../../utils/formatUtils"
import BlurOffIcon from '@material-ui/icons/BlurOff';
import './Media.scss'

export interface MediaProps {
    src: string;
    alt: string;
}

const shouldBlurImage = (src: string) => /blur/.test(src)
export const Media: FC<MediaProps> = ({src, alt}) => {
    const [blurred, setBlurred] = useState(shouldBlurImage(src))
    return <>
        {/* for now just do this because cra uses datauri for small images */}
        {getUrlMediaFormat(src) !== Format.video &&
            <div className='media-image-container'>
                {blurred && <BlurOffIcon onClick={() => setBlurred(false)} fontSize='large' color='secondary' />}
                <img src={src} alt={alt} className={blurred ? 'blurred' : ''}/>
            </div>
        }
        {getUrlMediaFormat(src) === Format.video && <video controls><source src={src} /></video>}
    </>
}