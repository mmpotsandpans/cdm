import { FC, useLayoutEffect } from "react"

export interface RedirectProps {
    url: string
}

export const Redirect: FC<RedirectProps> = ({url}) => {
    useLayoutEffect(() => {
        if (url) {
            document.location.href = url
        }
    }, [url])
    return <div style={{padding: '2em'}}>redirecting...</div>
}

export default Redirect