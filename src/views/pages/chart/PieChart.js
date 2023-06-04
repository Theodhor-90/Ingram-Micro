import * as d3 from 'd3'
import { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateFirstLevelSelection, updateSecondLevelSelection } from '../../../app/dataSlice'
import { drawDonut, drawPie, drawCloseCircle, drawInnerCircle } from './drawUtils'

import { setIsChartInViewport, updateRoute } from '../../../app/routeSlice'

export const PieChart = ({
    options = [],
    firstLevelSelection = null,
    secondLevelSelection = null,
    rightColumnRef,
}) => {
    const svgRef = useRef()
    const dispatch = useDispatch()
    const position = useSelector((state) => state.routes.position)
    const [hoverMessage, setHoverMessage] = useState({
        show: false,
        text: 'Select something to do something',
    })

    const isChartInViewport = useSelector((state) => state.routes.isChartInViewport)

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!isChartInViewport) dispatch(setIsChartInViewport(true))
            } else if (isChartInViewport) dispatch(setIsChartInViewport(false))
        })
    }
    const observer = new IntersectionObserver(callback, { threshold: [0.5] })

    if (svgRef && svgRef.current) observer.observe(svgRef.current)

    const windowSize = useSelector((state) => state.routes.windowSize)

    const [data, setData] = useState([])
    const [chartRef, setChartRef] = useState(null)
    const [size, setSize] = useState(484)

    const changeFirstLevelSelection = (selection) => {
        dispatch(updateFirstLevelSelection(selection))
        if (position !== 'Explore Engagement Tools') {
            dispatch(updateRoute('Explore Engagement Tools'))
        }
    }

    const changeSecondLevelSelection = (selection) => {
        dispatch(updateSecondLevelSelection(selection))
        if (position !== 'Explore Engagement Tools') {
            dispatch(updateRoute('Explore Engagement Tools'))
        }
    }

    const triggerBackFunction = () => {
        if (firstLevelSelection) {
            if (!secondLevelSelection) {
                changeFirstLevelSelection('')
            } else changeSecondLevelSelection('')
        }
    }

    const outerOptions = [
        { property: 'Business Function Perspective', value: 100 },
        { property: 'Experience Perspective', value: 100 },
    ]

    const plotChart = () => {
        let w
        let h
        if (windowSize > 991) {
            if (windowSize < 1250) {
                w = (windowSize / 12) * 5
                h = (windowSize / 12) * 5
                setSize((windowSize / 12) * 5)
            } else {
                w = 484
                h = 484
                setSize(484)
            }
        } else {
            if (windowSize > 532) {
                h = 484
                w = 484
                setSize(484)
            } else {
                h = windowSize
                w = windowSize
                setSize(windowSize)
            }
        }
        const outerRadius = (w - 16) / 2
        const middleRadius = outerRadius * 0.8471
        const radius = outerRadius * 0.8161

        const svg = d3.select(svgRef.current).append('svg')
        setChartRef(svg)
        svg.attr('width', w)
            .attr('height', h)
            .style('overflow', 'visible')
            .style('transform', 'translate(50%, 50%)')
        // .style('margin-top', `${radius + 50}px`)
        // .style('margin-left', `${radius + 50}px`)
        const formattedData = d3
            .pie()
            .startAngle(() => {
                if (data.length === 3) {
                    return 0
                } else return Math.PI / 3
            })
            .endAngle(() => {
                if (data.length === 3) {
                    return Math.PI * 2
                } else return Math.PI * 2 + Math.PI / 3
            })
            .value((d) => d.value)(data)

        const formattedOuterData = d3
            .pie()
            .startAngle(Math.PI / 2)
            .endAngle(Math.PI * 2 + Math.PI / 2)
            .value((d) => d.value)(outerOptions)
        const arcGenerator = d3.arc().innerRadius(20).outerRadius(radius)
        const outerArcGenerator = d3.arc().innerRadius(middleRadius).outerRadius(outerRadius)

        drawDonut(
            svg,
            formattedOuterData,
            outerArcGenerator,
            changeFirstLevelSelection,
            firstLevelSelection,
            outerRadius,
            w,
            middleRadius,
            rightColumnRef
        )
        drawPie(
            svg,
            formattedData,
            arcGenerator,
            changeSecondLevelSelection,
            secondLevelSelection,
            rightColumnRef,
            setHoverMessage,
            hoverMessage,
            firstLevelSelection
        )
        if (firstLevelSelection) {
            drawCloseCircle(svg, triggerBackFunction)
        } else drawInnerCircle(svg, radius, outerRadius)
    }

    useEffect(() => {
        setData(options)
    }, [options])

    useEffect(() => {
        if (chartRef) {
            chartRef.remove()
            setChartRef(null)
        }
        plotChart()
    }, [data])

    return (
        <div className='d-flex justify-content-center'>
            <div
                className='chart-container'
                ref={svgRef}
                style={{ width: size + 'px', height: size + 'px' }}
            >
                {!firstLevelSelection && (
                    <div className='chart-tooltip'>
                        Select Experience Perspective or Business Function Perspective to reveal
                        pain points and explore solutions
                    </div>
                )}
            </div>
        </div>
    )
}
