import React from 'react'

const InputField = ({ label, name, type, placeholder, pattern, required }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="block mb-2 text-sm font-medium text-black">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className="bg-white border border-gray-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 capitalize"
        placeholder={placeholder}
        pattern={pattern}
        required={required}
      />
    </div>
  );
};
export default InputField
