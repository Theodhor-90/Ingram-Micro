import painPoints from './painpoints.json'

export interface IBusinessPillars {
    name: string,
    values: string []
}

export interface IStructuredPoint{
    description: string,
    businessFunctions: string [],
    businessPillars: IBusinessPillars[],
    growthStages: string[],
    experiences: string[]
}

const structuredPainpoints: IStructuredPoint [] = []

export const businessFunctions = {
    "Function Operations": "Operations",
    "Function HR": "HR",
    "Function Finance": "Finance",
    "Function Sales": "Sales",
    "Function Marketing": "Marketing",
    "Function Distribution & Logistics": "Distribution & Logistics"
}

export const businessPillars = {
    "Business Pillar Modern Cloud Platforms": "Modern Cloud Platforms",
    "Business Pillar Seamless Security": "Seamless Security",
    "Business Pillar Connected Workplace": "Connected Workplace",
    "Business Pillar Business Performance": "Business Performance"
}

export const growthStages = {
    "Growth Stage Startup": "Startup",
    "Growth Stage Expansion": "Expansion",
    "Growth Stage Maturity": "Maturity"
}

export const experiences = {
    "Experience Customer": "Customer",
    "Experience Employee": "Employee",
    "Experience Supplier": "Supplier/Partner"
}



const getStructuredPillars = (pillars: any) => {
    const structuredPillars = pillars.split(',')
    return structuredPillars.map((el: any) => el.trim())
}

painPoints.forEach(point => {
    const structuredPoint: IStructuredPoint = {
        description: point['Pain Point'],
        businessFunctions: [],
        businessPillars: [],
        growthStages: [],
        experiences: []
    }
    Object.entries(businessFunctions).forEach(entry => {
        if(point[entry[0] as keyof typeof point] === 'X'){
            structuredPoint.businessFunctions.push(entry[1])
        }
    })

    Object.entries(businessPillars).forEach(entry => {
        if(point[entry[0] as keyof typeof point] !== ""){
            const pillars = point[entry[0] as keyof typeof point]
            structuredPoint.businessPillars.push({
                name: entry[1],
                values: getStructuredPillars(pillars)
            })
        }
    })

    Object.entries(growthStages).forEach(entry => {
        if(point[entry[0] as keyof typeof point] === "X"){
            structuredPoint.growthStages.push(entry[1])
        }
    })

    Object.entries(experiences).forEach(entry => {
        if(entry[0] !== "Experience Supplier"){
            if(point[entry[0] as keyof typeof point] === 'X'){
                structuredPoint.experiences.push(entry[1])
            }
        } else {
            if(point[entry[0]]["Partner"] === 'X'){
                structuredPoint.experiences.push(entry[1])
            }
        }
    })

    structuredPainpoints.push(structuredPoint)
})

export default structuredPainpoints