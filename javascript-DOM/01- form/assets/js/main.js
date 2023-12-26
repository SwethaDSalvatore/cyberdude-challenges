document.addEventListener("DOMContentLoaded", function () {
  const formEl = document.forms["idcard-form"];
  const reviewButton = document.getElementById("review");
  const outputContentEl = document.getElementById("outputContent");
  const outputEl = document.getElementById("output");
  const submitButton = document.getElementById("submit");
  outputEl.style.display = "none";

  reviewButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Collect input values
    const fullName = formEl.elements.fullName.value.toUpperCase();
    const gender = formEl.elements.gender.value;
    const employeeId = formEl.elements.employeeId.value;
    const email = formEl.elements.email.value;
    const phone = formEl.elements.phone.value;
    const bloodGroup = formEl.elements.bloodGroup.value;
    const day = formEl.elements.day.value;
    const month = formEl.elements.month.value;
    const year = formEl.elements.year.value;


    if (fullName.length > 0 && gender.length > 0 && employeeId.length > 0 && email.length > 0 && phone.length > 0 && bloodGroup.length > 0 && day.length > 0 && month.length > 0 && year.length > 0) {
      // Display the input values in the UI
      const outputHTML = `
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Employee ID NO:</strong> ${employeeId}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Blood Group:</strong> ${bloodGroup}</p>
    <p><strong>Joining Date:</strong> ${day}/${month}/${year}</p>
`;

      // Set the HTML content in the outputContent div
      outputContentEl.innerHTML = outputHTML;
      outputEl.style.display = "block";
    }
  });
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    alert("form has been submitted successfuly");
  });
});

