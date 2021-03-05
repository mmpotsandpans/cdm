import { Format } from './../models/Format'

export const getUrlMediaFormat = (url: string) => {
    if (/\.(png|jpe?g|svg|gif)$/i.test(url)) {
        return Format.image
    } else if (/\.(mov|avi|flv|wmv|3gp|mp4|mpe?g)$/i.test(url)) {
        return Format.video
    }
}