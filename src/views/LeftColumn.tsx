import { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChartPage } from './pages/chart/ChartPage'
import { Navbar } from './pages/static/navbar/Navbar'
import { Title } from './pages/static/title/Title'

export const LeftColumn: FunctionComponent<{ rightColumnRef: any }> = ({ rightColumnRef }) => {
    const isNavbarActive = useSelector((state: any) => state.routes.activeNav)
    const windowSize = useSelector((state: any) => state.routes.windowSize)
    const position = useSelector((state: any) => state.routes.position)
    const [showHeader, setShowHeader] = useState(true)

    useEffect(() => {
        if (isNavbarActive) {
            if (showHeader) {
                setShowHeader(false)
            }
        } else if (windowSize < 992) {
            if (position === 'Explore Engagement Tools') {
                if (!showHeader) {
                    setShowHeader(true)
                }
            } else {
                if (showHeader) {
                    setShowHeader(false)
                }
            }
        } else {
            if (!showHeader) {
                setShowHeader(true)
            }
        }
    }, [windowSize, position, isNavbarActive])
    return (
        <div
            className={`col col-12 col-lg-5 pb-80-mobile position-relative p-0 min-height-100 pb-5 fit-content-mobile ${
                windowSize > 991 || (windowSize < 992 && position === 'Explore Engagement Tools')
                    ? 'shaped-background'
                    : ''
            }`}
        >
            <Title showHeader={showHeader} />

            {isNavbarActive ? (
                <Navbar />
            ) : windowSize > 991 ||
              (windowSize < 992 && position === 'Explore Engagement Tools') ? (
                <ChartPage rightColumnRef={rightColumnRef} />
            ) : null}
        </div>
    )
}
