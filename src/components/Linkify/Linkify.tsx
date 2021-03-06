import React, { FC } from "react"
import ReactLinkify from "react-linkify"

export interface LinkifyProps {
    children: any
}

export const Linkify: FC<LinkifyProps> = ({children}) => {
    return <ReactLinkify componentDecorator={(decoratedHref, decoratedText, key) => (
        <a target="blank" href={decoratedHref} key={key} onClick={(e) => e.stopPropagation()}>
            {decoratedText}
        </a>
    )}>
        {children}
    </ReactLinkify>
}