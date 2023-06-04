import { FC, useRef, useState } from 'react'
import { FormTitle } from './components/FormTitle'
import { FormBody } from './components/FormBody'
import { useDispatch } from 'react-redux'
import { updateRoute } from '../../app/routeSlice'
import { salesSupportSchema } from './validation'
import { blacklist } from './blacklist/blacklist'

export type TError = {
    name: string
    message: string
}

export const AliquaForm: FC<{}> = ({}) => {
    const formRef = useRef(null as null | HTMLFormElement)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        bcn: '',
        company: '',
        country: 'United Kingdom',
        growthsolution: '',
        phone: '',
        title: '',
        requirement: '',
    })
    const [errors, setErors] = useState([] as TError[])
    const [stages, setStages] = useState([
        {
            name: 'Seamless Security',
            selected: false,
        },
        {
            name: 'Modern Cloud Platforms',
            selected: false,
        },
        {
            name: 'Connected Workplace',
            selected: false,
        },
        {
            name: 'Business Performance',
            selected: false,
        },
    ])

    const handleStage = (index: number) => {
        const newStages = [...stages]
        newStages[index].selected = !newStages[index].selected
        setStages(newStages)
    }

    const handleChange = (e: any) => {
        const newFormData = { ...formData }
        const nameKey = e.target.name as keyof typeof formData
        const nameValue = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        newFormData[nameKey] = nameValue
        setFormData(newFormData)
    }

    const getEmailErrorMessage = (domainType: 'personal' | 'vendor' | 'competitor') => {
        switch (domainType) {
            case 'personal':
                return 'Personal email domains are not allowed!'
            case 'vendor':
                return 'Vendor email domains are not allowed!'
            case 'competitor':
                return 'Competitor email domains are not allowed!'
        }
    }

    const structureErrors = (errors: string[]) => {
        const result: TError[] = []
        errors.forEach((err) => {
            const splitErr = err.split('-')
            result.push({
                name: splitErr[0],
                message: splitErr[1],
            })
        })
        return result
    }

    const resetError = (field: string) => {
        setErors(errors.filter((e) => e.name !== field))
    }

    const dispatch = useDispatch()

    const backToHome = () => {
        dispatch(updateRoute('Explore Engagement Tools'))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formDataObj = new FormData(e.currentTarget)
        const payload = Object.fromEntries(formDataObj)
        console.log('POSTTTTT', payload)
        console.log('FORM DATA', formData)
        let stageField = ''
        stages.forEach((stage) => {
            if (stage.selected) {
                if (stageField === '') {
                    stageField = stageField + stage.name
                } else stageField = stageField + ', ' + stage.name
            }
        })
        const formattedFormData = formData
        formattedFormData.growthsolution = stageField
        salesSupportSchema
            .validate(formattedFormData, { abortEarly: false })
            .then((res) => {
                let notAllowedDomain = false
                for (let a = 0; a < blacklist.length; a++) {
                    if (formattedFormData.email.includes('@' + blacklist[a].value)) {
                        notAllowedDomain = true
                        setErors([
                            {
                                name: 'email',
                                message: getEmailErrorMessage(blacklist[a].name),
                            },
                        ])
                        a = blacklist.length
                    }
                }
                if (!notAllowedDomain && formRef.current) {
                    formRef.current.submit()
                }
            })
            .catch((err) => {
                setErors(structureErrors(err.errors))
            })
    }

    return (
        <form
            target='blank'
            name='Digitalsales_Form_1903'
            onSubmit={(e) => handleSubmit(e)}
            id='form1903'
            className='elq-form'
            ref={formRef}
        >
            <input
                value='Digitalsales_Form_1903'
                type='hidden'
                name='elqFormName'
            />
            <input
                value='2044559064'
                type='hidden'
                name='elqSiteId'
            />
            <input
                type='hidden'
                id='elqFormSubmissionToken'
                name='elqFormSubmissionToken'
            />
            <input
                name='elqCampaignId'
                type='hidden'
            />
            <div>
                <FormTitle />
                <FormBody
                    errors={errors}
                    resetError={resetError}
                    handleChange={handleChange}
                    stages={stages}
                    handleStage={handleStage}
                />
                <input
                    type='hidden'
                    name='pageURL'
                    id='fe32456'
                />
                <input
                    type='hidden'
                    name='redirect'
                    id='fe32457'
                    value='https://ingrammicrocloud.com/thank-you'
                />
                <input
                    type='hidden'
                    name='utm_source'
                    id='fe32458'
                />
                <input
                    type='hidden'
                    name='utm_medium'
                    id='fe32459'
                />
                <input
                    type='hidden'
                    name='utm_campaign'
                    id='fe32460'
                />
                <input
                    type='hidden'
                    name='utm_content'
                    id='fe32461'
                />
                <input
                    type='hidden'
                    name='browser'
                    id='fe32462'
                />
                <div
                    id='elq-FormLastRow'
                    style={{ display: 'none' }}
                >
                    <input
                        type='hidden'
                        name='address1'
                        id='fe32506'
                        className='elq-item-input'
                    />
                </div>
                <input
                    type='hidden'
                    name='leadSource'
                    id='fe32463'
                    value='Digital Sales Tool'
                />
                <input
                    type='hidden'
                    name='noofinterestedareas'
                    id='fe32506'
                />
                <input
                    type='hidden'
                    name='submissionType'
                    id='fe32470'
                />
            </div>
        </form>
    )
}
