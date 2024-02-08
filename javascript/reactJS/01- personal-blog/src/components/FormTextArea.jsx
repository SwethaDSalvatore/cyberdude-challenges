import React from 'react'
import PropTypes from "prop-types"

export const FormTextArea = ({
    name,
    label,
    placeholder,
    value,
    handleOnChange,
    required,
}) => {
    return (
        <div className="space-y-2" >
            <label htmlFor={name}>{label} {required ? <span className="text-red-500 ml-1">*</span> : ""}</label>
            <textarea name={name} type="text" placeholder={placeholder}
                value={value}
                onChange={handleOnChange} required={required} className="px-4 py-2 pb-10 block outline-none w-full rounded">
            </textarea>
        </div>
    )
}
FormTextArea.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    required: PropTypes.bool,
}