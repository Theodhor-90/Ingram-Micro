import { FC, useEffect, useState } from 'react'
import { IGenericInput } from '../FormBody'
import { TError } from '../../AliquaForm'

export const TextAreaInput: FC<IGenericInput> = ({
    name,
    label,
    isRequired,
    handleChange,
    errors,
    resetError,
    isReadOnly,
    placeholder,
    id,
}) => {
    const [error, setError] = useState(null as TError | null)
    const triggerHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (error) {
            resetError(name)
        }
        handleChange && handleChange(e)
    }
    useEffect(() => {
        const actualError = errors.find((err) => {
            return err.name === name
        })
        setError(actualError ? actualError : null)
    }, [errors])
    return (
        <div className='elq-form-field'>
            <label>
                {label}
                {isRequired ? <span className='elq-required'>*</span> : null}
            </label>
            {error ? <div className='elq-invalid-message'>{error.message}</div> : null}
            <textarea
                className={`elq-item-input ${error ? 'elq-invalid' : ''}`}
                onChange={(e) => triggerHandleChange(e)}
                name={name}
                style={{ width: '100%' }}
                readOnly={isReadOnly}
                placeholder={placeholder ? placeholder : undefined}
                id={id}
            ></textarea>
        </div>
    )
}
