import { FC, useEffect, useState } from 'react'
import { SelectArrow } from '../../../../icons/SelectArrow'
import { Check } from '../../../../icons/Check'
import { IGenericInput } from '../Body'
import { TError } from '../../AliquaForm'

interface ISelectInput extends IGenericInput {
    options: { name: string; selected: boolean }[]
}

export const SelectInput: FC<ISelectInput> = ({
    name,
    label,
    isRequired,
    handleStage,
    errors,
    resetError,
    options,
    id,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [placeholder, setPlaceholder] = useState('Please select')
    const [error, setError] = useState(null as TError | null)

    useEffect(() => {
        let output = ''
        options.forEach((op) => {
            if (op.selected) {
                output === '' ? (output = output + op.name) : (output = output + ', ' + op.name)
            }
        })
        if (output === '') {
            output = 'Please select'
        }
        setPlaceholder(output)
    }, [options])
    useEffect(() => {
        const actualError = errors.find((err) => {
            return err.name === name
        })
        setError(actualError ? actualError : null)
    }, [errors])
    const toggleDropDown = () => {
        setIsOpen(!isOpen)
    }
    const triggerHandleStage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        if (error) {
            resetError(name)
        }
        handleStage && handleStage(index)
    }
    return (
        <div className='elq-form-field'>
            <input
                className='invisible'
                id={id}
                value={placeholder}
                readOnly
                name={name}
            />
            <label>
                {label}
                {isRequired ? <span className='elq-required'>*</span> : null}
            </label>
            {error ? <div className='elq-invalid-message'>{error.message}</div> : null}
            <div className={`input ${error ? 'elq-invalid' : ''}`}>
                <div
                    onClick={toggleDropDown}
                    className='elq-row'
                >
                    {placeholder ? placeholder : 'Please select one or more'}{' '}
                    <span>
                        <SelectArrow rotated={isOpen} />
                    </span>
                </div>
                {isOpen ? (
                    <div className='elq-dropdown'>
                        {options.map((op, index) => (
                            <div
                                key={`growth-stage-option-${index}`}
                                className='elq-row start'
                                onClick={(e) => triggerHandleStage(e, index)}
                            >
                                <div className='checkbox'>{op.selected ? <Check /> : null}</div>
                                <div>{op.name}</div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
