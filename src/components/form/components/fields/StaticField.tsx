import { FC } from 'react'

interface IStaticField {
    name: string
    label: string
    placeholder: string
    id: string
    isReadOnly: boolean
    isRequired: boolean
}

export const StaticField: FC<IStaticField> = ({
    name,
    label,
    isReadOnly,
    isRequired,
    placeholder,
    id,
}) => {
    return (
        <div className='elq-form-field'>
            <label>
                {label}
                {isRequired ? <span className='elq-required'>*</span> : null}
            </label>
            <input
                type='text'
                className={`elq-item-input`}
                name={name}
                style={{ width: '100%' }}
                readOnly={isReadOnly}
                value={placeholder}
                id={id}
            ></input>
        </div>
    )
}
