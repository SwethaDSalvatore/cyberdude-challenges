document.addEventListener("DOMContentLoaded", function () {
    const formEl = document.forms["idcard-form"];
    const submitButton = document.getElementById("btn");
    const outputContent = document.getElementById("outputContent");
  
    // mandatory input validation
    formEl.addEventListener("input", validateForm);
  
    function validateForm() {
      // validity function
      const isFormValid = formEl.checkValidity();
  
      // specific validations
      const empIdIsValid = isValidEmployeeID(formEl.elements.employeeId.value);
      const emailIsValid = isValidEmail(formEl.elements.email.value);
      const phoneIsValid = isValidPhoneNumber(formEl.elements.phone.value);
      const bloodGroupIsValid = isValidBloodGroup(formEl.elements.bloodGroup.value);
      const dateIsValid = isValidDate(formEl.elements.day.value, formEl.elements.month.value, formEl.elements.year.value);
  
      // submit button disabled validations
      submitButton.disabled = !(isFormValid && empIdIsValid && emailIsValid && phoneIsValid && bloodGroupIsValid && dateIsValid);
  
      clearErrorMessages();
  
      // Display error messages for invalid inputs
      displayError("employeeId", empIdIsValid);
      displayError("email", emailIsValid);
      displayError("phone", phoneIsValid);
      displayError("bloodGroup", bloodGroupIsValid);
      displayError("day", dateIsValid);
      displayError("month", dateIsValid);
      displayError("year", dateIsValid);
    }
  
    function displayError(inputName, isValid) {
      const inputField = formEl.elements[inputName];
      const errorContainer = document.getElementById(`error-${inputName}`);
    
      if (!isValid) {
        // Show error message
        const errorMessage = inputField.dataset.error || "This field is required.";
        errorContainer.textContent = errorMessage;
    
        // Add visual cue (you can customize this based on your styling)
        inputField.classList.add("border-red-500");
        errorContainer.classList.add("text-red-500");
      }
    }
  
    // Function to clear error messages and visual cues
    function clearErrorMessages() {
      const inputFields = formEl.querySelectorAll("input");
      inputFields.forEach((input) => {
        input.classList.remove("border-red-500");
        const errorContainer = document.getElementById(`error-${input.name}`);
        if (errorContainer) {
          errorContainer.textContent = "";
          errorContainer.classList.remove("text-red-500");
        }
      });
    }
  
    // Employee ID validation
    function isValidEmployeeID(employeeID) {
      const employeeIDRegex = /^CD\d{5}$/;
      return employeeIDRegex.test(employeeID);
    }
  
    // Email validation
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Phone number validation
    function isValidPhoneNumber(phone) {
      const phoneRegex = /^(\+\d{1,3})?(\s)?\d{10}$/;
      return phoneRegex.test(phone);
    }
  
    // Blood group validation
    function isValidBloodGroup(bloodGroup) {
      const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
      return bloodGroupRegex.test(bloodGroup.toUpperCase());
    }
  
    // Date validation function
    function isValidDate(day, month, year) {
      const isValidDay = day >= 1 && day <= 31;
      const isValidMonth = month >= 1 && month <= 12;
      const isValidYear = year >= 1900 && year <= new Date().getFullYear();
  
      return isValidDay && isValidMonth && isValidYear;
    }
  
  
    // UI output
    submitButton.addEventListener("click", () => {
      //input values
      const fullNameEl = formEl.elements.fullName.value.toUpperCase();
      const genderEl = formEl.elements.gender.value;
      const employeeIdEl = formEl.elements.employeeId.value;
      const emailEl = formEl.elements.email.value;
      const phoneEl = formEl.elements.phone.value;
      const bloodGroupEl = formEl.elements.bloodGroup.value;
      const dayEl = formEl.elements.day.value;
      const monthEl = formEl.elements.month.value;
      const yearEl = formEl.elements.year.value;
  
      // Display the input values in the UI
      const uiOutput = `
             Full Name : ${fullNameEl}</p>
              <p>Gender : ${genderEl}</p>
              <p>Employee ID NO : ${employeeIdEl}</p>
              <p>E-mail : ${emailEl}</p>
              <p>Phone : ${phoneEl}</p>
              <p>Blood Group : ${bloodGroupEl}</p>
              <p>Joining Date : ${dayEl}/${monthEl}/${yearEl}</p>
          `;
  
  
      // Set the HTML content in the output
      outputContent.innerHTML = uiOutput;
    });
  });