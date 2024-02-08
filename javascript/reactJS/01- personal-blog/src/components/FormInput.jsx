import React from 'react'
import PropTypes from "prop-types"

export const FormInput = ({ name, label, placeholder, value, handleOnChange, required }) => {
    return (
        <div className="space-y-2" >
            <label htmlFor={name}>{label} {required ? <span className="text-red-500 ml-1">*</span> : ""}</label>
            <input name={name} type="text" placeholder={placeholder} className="px-4 py-2 block outline-none w-full rounded" value={value} onChange={handleOnChange} required={required} />
        </div>
    )
}
FormInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    handleOnChange: PropTypes.func,
    required: PropTypes.bool,
}