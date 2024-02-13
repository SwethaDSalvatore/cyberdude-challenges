import React from "react";
import PropTypes from "prop-types";

export const FormTextArea = ({
  name,
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
      <textarea
        name={name}
        type="text"
        placeholder={placeholder}
        {...register}
        className="px-4 py-2 pb-10 block outline-none w-full rounded"
      ></textarea>
      {error && <small className="text-red-500">{error.message}</small>}
    </div>
  );
};
FormTextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  register: PropTypes.object,
  error: PropTypes.object,
  required: PropTypes.bool,
};
