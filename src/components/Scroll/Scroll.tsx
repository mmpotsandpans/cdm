import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './Scroll.scss'
import { FC } from 'react';

export interface ScrollProps {
    node: HTMLTableElement | null
}
export const Scroll: FC<ScrollProps> = ({node}) => {
    const handleClick = (dir: 't' | 'b') => {
        if (dir === 't') {
            node?.scroll(0, 0)
        } else {
            if (node) {
                node.scrollTop = node?.scrollHeight
            }
        }
    }
    return (
        <div className='Scroll'>
            <ArrowUpwardIcon onClick={() => handleClick('t')}/>
            <ArrowDownwardIcon onClick={() => handleClick('b')} />
        </div>
    )
}