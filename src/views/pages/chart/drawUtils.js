import * as d3 from 'd3'

const donutTranslations = {
    'Business Function Perspective': 'functions',
    'Experience Perspective': 'experience',
}

const pieTranslations = {
    Marketing: 'Marketing',
    'Distribution & Logistics': 'Distribution & Logistics',
    Operations: 'Operations',
    HR: 'HR',
    Finance: 'Finance',
    Sales: 'Sales',
    Customer: 'Customer Experience',
    Employee: 'Employee Experience',
    'Supplier/Partner': 'Supplier/Partner Experience',
}

export const drawDonut = (
    svg,
    data,
    arcGenerator,
    changeFirstLevelSelection,
    firstLevelSelection = null,
    outerRadius,
    width,
    middleRadius
) => {
    svg.selectAll().data(data).join('g').attr('class', 'outer-slice')
    const outerSlices = d3.selectAll('.outer-slice')['_groups'][0]
    outerSlices.forEach((slice, i) => {
        d3.select(slice)
            .append('path')
            .attr('d', arcGenerator)
            .attr('fill', (d) =>
                donutTranslations[d.data.property] === firstLevelSelection
                    ? '#005492'
                    : firstLevelSelection
                    ? '#E1E1E1'
                    : '#0A2A5E'
            )
            .attr('stroke-width', '2px')
            .attr('stroke', 'white')
            .style('cursor', 'pointer')

        d3.select(slice)
            .append('path')
            .attr('id', function () {
                return 'outerSlice' + i
            })
            .attr('d', function (d) {
                let newDatum = d
                const startAngle = newDatum.endAngle
                const endAngle = newDatum.startAngle
                newDatum.startAngle = endAngle
                newDatum.endAngle = startAngle
                const anotherArc = d3
                    .arc()
                    .innerRadius(middleRadius)
                    .outerRadius(outerRadius)
                    .startAngle(startAngle)
                    .endAngle(endAngle)
                if (i === 1) {
                    return arcGenerator(d)
                } else return anotherArc()
            })
            .style('fill', 'none')

        d3.select(slice)
            .append('text')
            .style('fill', function (d) {
                if (
                    firstLevelSelection &&
                    donutTranslations[d.data.property] !== firstLevelSelection
                ) {
                    return '#5B5C5F'
                } else return 'white'
            })
            .attr('dy', function () {
                if (i === 1) {
                    return (outerRadius - middleRadius) * 0.6
                } else return (outerRadius - middleRadius) * -0.4
            })
            .append('textPath')
            .attr('class', 'donut-text')
            .attr('startOffset', '26%')
            .style('text-anchor', 'middle')
            .attr('xlink:href', function (d) {
                return '#outerSlice' + i
            })
            .text((d) => d.data.property)

        d3.select(slice)
            .on('mouseover', function (d, i) {
                d3.select(this).select('path').transition().duration('200').attr('fill', '#00B7A2')
            })
            .on('mouseout', function (d, i) {
                d3.select(this)
                    .select('path')
                    .transition()
                    .duration('200')
                    .attr('fill', (d) =>
                        donutTranslations[d.data.property] === firstLevelSelection
                            ? '#005492'
                            : firstLevelSelection
                            ? '#E1E1E1'
                            : '#0A2A5E'
                    )
            })
            .on('click', function (d, i) {
                changeFirstLevelSelection(
                    i.data.property === 'Business Function Perspective' ? 'functions' : 'experience'
                )
            })
    })
}

export const drawPie = (
    svg,
    data,
    arcGenerator,
    changeSecondLevelSelection,
    secondLevelSelection = null,
    rightColumnRef,
    setHoverMessage,
    hoverMessage,
    firstLevelSelection
) => {
    let timeOutHover
    const updateHoverMessage = (newHoverMessage) => {
        timeOutHover = window.setTimeout(function () {
            setHoverMessage(newHoverMessage)
        }, 3000)
    }

    svg.selectAll().data(data).join('g').attr('class', 'slice')
    const slices = d3.selectAll('.slice')['_groups'][0]
    slices.forEach((slice, i) => {
        let datum
        d3.select(slice)
            .append('path')
            .attr('d', arcGenerator)
            .attr('fill', (d) => {
                datum = d
                return d.data.property === secondLevelSelection ? '#00B7A2' : '#0A2A5E'
            })
            .attr('stroke-width', '1px')
            .attr('stroke', 'white')
            .style('cursor', 'pointer')
        if (pieTranslations[datum.data.property].split(' ').length === 1) {
            d3.select(slice)
                .append('text')
                .text((d) => pieTranslations[d.data.property])
                .attr('class', 'pie-text')
                .attr('transform', (d) => {
                    return `translate(${arcGenerator.centroid(d)})`
                })
                .style('fill', 'white')
                .style('text-anchor', 'middle')
        } else if (pieTranslations[datum.data.property].split(' ').length === 2) {
            d3.select(slice)
                .append('text')
                .text((d) => pieTranslations[d.data.property].split(' ')[0])
                .attr('class', 'pie-text')
                .attr('transform', (d) => {
                    return `translate(${arcGenerator.centroid(d)})`
                })
                .style('fill', 'white')
                .style('text-anchor', 'middle')

            d3.select(slice)
                .append('text')
                .text((d) => pieTranslations[d.data.property].split(' ')[1])
                .attr('class', 'pie-text')
                .attr('transform', (d) => {
                    const position = arcGenerator.centroid(d)
                    position[1] = position[1] + 20
                    return `translate(${position})`
                })
                .style('fill', 'white')
                .style('text-anchor', 'middle')
        } else {
            d3.select(slice)
                .append('text')
                .text((d) => {
                    const text = pieTranslations[d.data.property].split(' ')
                    return `${text[0]}`
                })
                .attr('class', 'pie-text')
                .attr('transform', (d) => {
                    return `translate(${arcGenerator.centroid(d)})`
                })
                .style('fill', 'white')
                .style('text-anchor', 'middle')

            d3.select(slice)
                .append('text')
                .text((d) => {
                    const text = pieTranslations[d.data.property].split(' ')
                    return `${text[1]} ${text[2]}`
                })
                .attr('class', 'pie-text')
                .attr('transform', (d) => {
                    const position = arcGenerator.centroid(d)
                    position[1] = position[1] + 18
                    return `translate(${position})`
                })
                .style('fill', 'white')
                .style('text-anchor', 'middle')
        }

        d3.select(slice)
            .on('mouseover', function (d, i) {
                d3.select(this).select('path').transition().duration('200').attr('fill', '#00B7A2')

                updateHoverMessage({
                    show: true,
                    text:
                        firstLevelSelection === 'experience'
                            ? 'Select an Experience to filter pain points'
                            : 'select a Business Function to filter pain points',
                })
            })
            .on('mousemove', function (d) {
                clearTimeout(timeOutHover)
                if (hoverMessage.show) {
                    setHoverMessage({ show: false, text: null })
                }
                updateHoverMessage({
                    show: true,
                    text:
                        firstLevelSelection === 'experience'
                            ? 'Select an Experience to filter pain points'
                            : 'select a Business Function to filter pain points',
                })
            })
            .on('mouseout', function (d, i) {
                d3.select(this)
                    .select('path')
                    .transition()
                    .duration('200')
                    .attr('fill', (d) =>
                        d.data.property === secondLevelSelection ? '#00B7A2' : '#0A2A5E'
                    )
            })
            .on('mouseleave', function () {
                clearTimeout(timeOutHover)
                setHoverMessage({ show: false, text: null })
            })
            .on('click', function (d, i) {
                rightColumnRef.current.scrollIntoView({ behavior: 'smooth' })
                changeSecondLevelSelection(i.data.property)
            })
    })
}

export const drawCloseCircle = (svg, triggerBackFunction) => {
    const circle = svg.append('g')
    circle
        .append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', 24)
        .attr('stroke', 'white')
        .attr('stroke-width', '1px')
        .attr('fill', '#0A2A5E')
        .style('cursor', 'pointer')

    circle
        .append('path')
        .attr(
            'd',
            'M17.92 11.2016H11.4112L13.9712 8.64159L12.16 6.83032L7.41501 11.5766C7.17376 11.8166 7.03876 12.1416 7.03876 12.4816C7.03876 12.8216 7.17376 13.1465 7.41501 13.3865L12.16 18.1328L13.9712 16.3215L11.4112 13.7615H17.92C20.3938 13.7615 22.4 15.7678 22.4 18.2415C22.4 20.7153 20.3938 22.7215 17.92 22.7215H12.16V25.2815H17.92C20.435 25.2815 22.7588 23.9403 24.0164 21.7615C25.2751 19.5828 25.2751 16.9004 24.0164 14.7215C22.7589 12.5428 20.4352 11.2015 17.92 11.2015V11.2016Z'
        )
        .attr('fill', 'white')
        .style('transform', 'translate(-15px, -16px)')
        .style('cursor', 'pointer')

    circle
        .on('mouseover', function (d, i) {
            d3.select(this).select('circle').transition().duration('200').attr('fill', '#00B7A2')
        })
        .on('mouseout', function (d, i) {
            d3.select(this).select('circle').transition().duration('200').attr('fill', '#0A2A5E')
        })
        .on('click', function () {
            triggerBackFunction()
        })
}

export const drawInnerCircle = (svg, radius, outerRadius) => {
    const triangle = d3.symbol().type(d3.symbolTriangle).size(outerRadius)
    const innerCircle = svg.append('g')
    innerCircle
        .append('circle')
        .attr('cx', 0)
        .attr('cy', 0)
        .attr('r', radius)
        .attr('fill', '#0A2A5E')
    if (radius > 160) {
        innerCircle
            .append('line')
            .style('stroke', 'white')
            .style('stroke-width', 2)
            .attr('x1', radius - 48)
            .attr('y1', 0)
            .attr('x2', radius)
            .attr('y2', 0)
        innerCircle
            .append('line')
            .style('stroke', 'white')
            .style('stroke-width', 2)
            .attr('x1', (radius - 48) * -1)
            .attr('y1', 0)
            .attr('x2', radius * -1)
            .attr('y2', 0)
    }
    const topTriangle = innerCircle.append('g')
    topTriangle
        .attr('class', 'stretching')
        .append('path')
        .attr('d', triangle)
        .attr('fill', 'white')
        .attr('class', 'pulsing')
        .attr('transform', `translate(0,${radius - 24}) rotate(180)`)
    const bottomTriangle = innerCircle.append('g')
    bottomTriangle
        .attr('class', 'stretching')
        .append('path')
        .attr('d', triangle)
        .attr('fill', 'white')
        .attr('class', 'pulsing')
        .attr('transform', `translate(0,${(radius - 24) * -1})`)
}
