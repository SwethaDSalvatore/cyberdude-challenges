document.addEventListener("DOMContentLoaded", function () {

    const formEl = document.forms["idcard-form"];
    const submitButtonEl = document.getElementById("btn");
    const outputContentEl = document.getElementById("outputContent");
    const outputEl = document.getElementById("output");
    outputEl.style.display = "none";
  
  
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
      // true = if this is false
      submitButtonEl.disabled = !(isFormValid && empIdIsValid && emailIsValid && phoneIsValid && bloodGroupIsValid && dateIsValid);
  
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
      const errorContainerEl = document.getElementById(`error-${inputName}`);
  
      if (!isValid) {
        // Show error message
        const errorMessage = inputField.dataset.error || "This field is required.";
        errorContainerEl.textContent = errorMessage;
  
        // Add visual cue (you can customize this based on your styling)
        inputField.classList.add("border-red-500");
        errorContainerEl.classList.add("text-red-500");
      }
    }
  
    // Function to clear error messages and visual cues
    function clearErrorMessages() {
      const inputFieldsEls = formEl.querySelectorAll("input");
  
      inputFieldsEls.forEach((input) => {
        input.classList.remove("border-red-500");
        const errorContainerEl = document.getElementById(`error-${input.name}`);
        if (errorContainerEl) {
          errorContainerEl.textContent = "";
          errorContainerEl.classList.remove("text-red-500");
        }
      });
    }
  
    // Employee ID validation
    function isValidEmployeeID(employeeID) {
      const employeeIDTest = /^CD\d{5}$/;
      return employeeIDTest.test(employeeID);
    }
  
    // Email validation
    function isValidEmail(email) {
      const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailTest.test(email);
    }
  
    // Phone number validation
    function isValidPhoneNumber(phone) {
      const phoneTest = /^(\+\d{1,3})?(\s)?\d{10}$/;
      return phoneTest.test(phone);
    }
  
    // Blood group validation
    function isValidBloodGroup(bloodGroup) {
      const bloodGroupTest = /^(A|B|AB|O)[+-]$/;
      return bloodGroupTest.test(bloodGroup.toUpperCase());
    }
  
    // Date validation function
    function isValidDate(day, month, year) {
      const isValidDay = day >= 1 && day <= 31;
      const isValidMonth = month >= 1 && month <= 12;
      const isValidYear = year >= 1900 && year <= new Date().getFullYear();
  
      return isValidDay && isValidMonth && isValidYear;
    }
  
    // UI output
    submitButtonEl.addEventListener("click", () => {
      //input values
      const fullNameEls = formEl.elements.fullName.value.toUpperCase();
      const genderEls = formEl.elements.gender.value.toUpperCase();
      const employeeIdEls = formEl.elements.employeeId.value;
      const emailEls = formEl.elements.email.value;
      const phoneEls = formEl.elements.phone.value;
      const bloodGroupEls = formEl.elements.bloodGroup.value.toUpperCase();
      const dayEls = formEl.elements.day.value;
      const monthEls = formEl.elements.month.value;
      const yearEls = formEl.elements.year.value;
  
      // Display the input values in the UI
      const uiOutput = `
             Full Name : ${fullNameEls}</p>
              <p>Gender : ${genderEls}</p>
              <p>Employee ID NO : ${employeeIdEls}</p>
              <p>E-mail : ${emailEls}</p>
              <p>Phone : ${phoneEls}</p>
              <p>Blood Group : ${bloodGroupEls}</p>
              <p>Joining Date : ${dayEls}/${monthEls}/${yearEls}</p>
          `;
  
  
      // Set the HTML content in the output
      outputContentEl.innerHTML = uiOutput;
      outputEl.style.display = "block";
    });
  
  
  });
  
  