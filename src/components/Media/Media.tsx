import { FC, useMemo, useState } from "react"
import { Format } from "../../models/Format"
import { getMediaFormatFromUrl, shouldBlurImage } from "../../utils/mediaUtils"
import BlurOnIcon from '@material-ui/icons/BlurOn';
import BlurOffIcon from '@material-ui/icons/BlurOff';
import './Media.scss'

export interface MediaProps {
    src: string;
    alt: string;
}

export const Media: FC<MediaProps> = ({src, alt}) => {
    const [blurred, setBlurred] = useState(shouldBlurImage(src))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const originallyBlurred = useMemo(() => blurred, [])
    const BlurIcon = blurred ? BlurOffIcon : BlurOnIcon
    return <>
        {/* for now just do this because cra uses datauri for small images */}
        {getMediaFormatFromUrl(src) !== Format.video &&
            <div className='media-image-container'>
                {originallyBlurred && <BlurIcon className='blur-icon' onClick={() => setBlurred(!blurred)} fontSize='large' color='secondary' />}
                <img src={src} alt={alt} className={blurred ? 'blurred' : ''}/>
            </div>
        }
        {getMediaFormatFromUrl(src) === Format.video && <video controls><source src={src} /></video>}
    </>
}