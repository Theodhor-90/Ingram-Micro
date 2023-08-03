import { useSelector, useDispatch } from 'react-redux'
import { toggleNav } from '../../../../app/routeSlice'

export const Burger = () => {
    const isNavbarActive = useSelector((state: any) => state.routes.activeNav)
    const dispatch = useDispatch()

    const toggleNavbar = () => {
        dispatch(toggleNav(!isNavbarActive))
    }
    return (
        <svg
            className={`burger ${isNavbarActive ? 'active' : ''}`}
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={toggleNavbar}
        >
            <rect
                className='line-1'
                x='2'
                y='4'
                width='28'
                height='4'
                fill='#0A2A5E'
            />
            <rect
                className='line-2'
                x='2'
                y='14'
                width='28'
                height='4'
                fill='#0A2A5E'
            />
            <rect
                className='line-3'
                x='2'
                y='24'
                width='28'
                height='4'
                fill='#0A2A5E'
            />
            <line
                className='line-4'
                x1='5'
                y1='4'
                x2='27'
                y2='24'
                stroke='#0A2A5E'
                strokeWidth='4'
            />
            <line
                className='line-5'
                x1='27'
                y1='4'
                x2='5'
                y2='24'
                stroke='#0A2A5E'
                strokeWidth='4'
            />
        </svg>
    )
}
