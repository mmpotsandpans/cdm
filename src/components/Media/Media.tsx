import { FC } from "react"
import { Format } from "../../models/Format"
import { getUrlMediaFormat } from "../../utils/formatUtils"

export interface MediaProps {
    src: string;
    alt: string;
}
export const Media: FC<MediaProps> = ({src, alt}) => {
    return <>
        {/* for now just do this because react uses datauri for small images */}
        {getUrlMediaFormat(src) !== Format.video && <img src={src} alt={alt} />}
        {getUrlMediaFormat(src) === Format.video && <video controls><source src={src} /></video>}
    </>
}