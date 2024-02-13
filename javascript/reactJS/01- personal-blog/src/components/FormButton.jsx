import React from "react";
import PropTypes from "prop-types";

export const FormButton = (button) => {
  return (
    <button className="px-4 py-2 w-full rounded-lg bg-[#7B2869] hover:bg-[#5e2351] text-white">
      {button.text}
    </button>
  );
};

FormButton.propTypes = {
  text: PropTypes.string,
};
