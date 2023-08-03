import { FC, useEffect, useState } from 'react'
import { IGenericInput } from '../FormBody'
import { TError } from '../../AliquaForm'

interface ICheckboxInput extends IGenericInput {
    hasLink?: boolean
}

export const CheckboxAcceptInput: FC<ICheckboxInput> = ({
    handleChange,
    errors,
    resetError,
    name,
    label,
    isRequired,
    hasLink,
}) => {
    const [error, setError] = useState(null as null | TError)
    const triggerHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div>
            {error ? <div className='elq-invalid-message'>{error.message}</div> : null}
            <div className='elq-form-field accept'>
                <input
                    type='checkbox'
                    name={name}
                    id='fe32454'
                    className={`input ${error ? 'elq-invalid' : ''}`}
                    onChange={(e) => triggerHandleChange(e)}
                />

                <label
                    className='checkbox-aligned elq-item-label'
                    htmlFor='fe32454'
                >
                    {label}
                    {hasLink ? (
                        <a
                            href='https://corp.ingrammicro.com/Terms-of-Use/Privacy-Statement.aspx'
                            target='_blank'
                        >
                            Global Privacy Statement.
                        </a>
                    ) : null}
                    {isRequired ? <span className='elq-required'>*</span> : null}
                </label>
            </div>
        </div>
    )
}
