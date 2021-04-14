import { FC, ReactNode, useEffect, useRef } from 'react'
import './Page.scss'

interface PageProps {
    children: ReactNode
}

export const Page: FC<PageProps> = ({children}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        if (!ref.current) {
            return
        }
        const headerHeight = document.querySelector('header')?.getBoundingClientRect().height || 0

        ref.current.style.height = `calc(100vh - ${headerHeight}px)`
    }, [])
    return <div className='page' ref={ref}>
        {children}
    </div>
}