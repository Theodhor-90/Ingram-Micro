import { FC } from 'react'
import { TError } from '../AliquaForm'
import { TextInput } from './fields/TextInput'
import { StaticField } from './fields/StaticField'
import { TextAreaInput } from './fields/TextAreaInput'
import { SelectInput } from './fields/SelectInput'
import { CheckboxAcceptInput } from './fields/CheckboxAcceptInput'
import { FormFieldAddress1 } from './fields/FormFieldAddress1'
import { FormSubmitButton } from './fields/FormSubmitButton'

interface IFormBodyProps {
    handleChange: (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    errors: TError[]
    resetError: (field: string) => void
    stages: { name: string; selected: boolean }[]
    handleStage: (index: number) => void
}

export interface IGenericInput {
    name: string
    label: string
    id: string
    errors: TError[]
    resetError: (field: string) => void
    handleChange?: (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
    ) => void
    handleStage?: (index: number) => void
    isRequired?: boolean
    isReadOnly?: boolean
    placeholder?: string
}

export const FormBody: FC<IFormBodyProps> = ({
    handleChange,
    errors,
    resetError,
    stages,
    handleStage,
}) => {
    return (
        <div className='elq-main-form'>
            <TextInput
                handleChange={handleChange}
                name={'firstName'}
                label='First Name'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32446'}
            />
            <TextInput
                handleChange={handleChange}
                name={'lastName'}
                label='Last Name'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32447'}
            />
            <TextInput
                handleChange={handleChange}
                name={'email'}
                label='Email Address'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32448'}
            />
            <TextInput
                handleChange={handleChange}
                name={'phone'}
                label='Phone Number'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32449'}
            />
            <TextInput
                handleChange={handleChange}
                name={'company'}
                label='Company'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32450'}
            />
            <TextInput
                handleChange={handleChange}
                name={'title'}
                label='Title'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32472'}
            />
            <TextInput
                handleChange={handleChange}
                name={'bcn'}
                label='BCN - If unknown, type "0"'
                errors={errors}
                resetError={resetError}
                isRequired={true}
                id={'fe32451'}
            />
            <StaticField
                name={'country'}
                label='Country'
                isRequired={true}
                isReadOnly={true}
                placeholder={'United Kingdom'}
                id={'fe32453'}
            />
            <TextAreaInput
                handleChange={handleChange}
                name={'requirement'}
                label='Requirement'
                resetError={resetError}
                errors={errors}
                id={'fe32876'}
            />
            <SelectInput
                label='Interested Growth Solution Areas'
                name={'growthsolution'}
                errors={errors}
                resetError={resetError}
                isRequired={true}
                options={stages}
                handleStage={handleStage}
                id={'fe32473'}
            />
            <CheckboxAcceptInput
                isRequired={true}
                name='iagree'
                label='Agree to privacy policy'
                errors={errors}
                resetError={resetError}
                handleChange={handleChange}
                id={'fe32454'}
            />
            <CheckboxAcceptInput
                name='consent'
                handleChange={handleChange}
                errors={errors}
                resetError={resetError}
                hasLink={true}
                id={'fe32455'}
                label='By providing my personal data, including name and contact information to Ingram Micro and its affiliates, I agree to be contacted for marketing purposes. Ingram Micro will collect and process your personal data, in compliance with our'
            />
            <FormFieldAddress1 handleChange={handleChange} />
            <FormSubmitButton />
        </div>
    )
}
