import React from "react";
import PropTypes from "prop-types";

export const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  register,
  error,
  required,
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name}>
        {label} {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        {...register}
        className="px-4 py-2 block outline-none w-full rounded"
      />
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};
FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleOnChange: PropTypes.func,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};
