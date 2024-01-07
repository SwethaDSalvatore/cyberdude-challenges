
// Function Expression :

// let salarySlip = function (employeeName, salary) {
//     console.log(`Salary Slip of ${employeeName}`);
//     console.log(`Basic Salary: ${salary}`);
//     let deductions = 0.1 * salary;
//     console.log(`Deductions: ${deductions}`);
//     let netSalary = salary - deductions;
//     console.log(`Net Salary: ${netSalary}`);
// };

// salarySlip("Ms.April", 50000);

// Return:

// function calculateNetSalary(salary, taxDeductions) {
//     let deductions = taxDeductions * salary;
//     let netSalaryCalculation = salary - deductions;
//     return netSalaryCalculation;
// }

// let netSalary = calculateNetSalary(50000, 0.1);
// console.log(`Net Salary: ${netSalary}`);


//  Parameters:

// function salarySlip(employeeName, basicSalary, allowances, deductions) {
//     console.log(`Salary Slip of ${employeeName}`);
//     console.log(`Basic Salary: ${basicSalary}`);
//     console.log(`Allowances: ${allowances}`);
//     console.log(`Deductions: ${deductions}`);
//     let netSalary = basicSalary + allowances - deductions;
//     console.log(`Net Salary: ${netSalary}`);
// }

// arguments:

// salarySlip("Ms.May", 50000, 4000, 2000);


// IIFE :

// ((employeeName, basicSalary) => {
//     console.log(`Salary Slip of ${employeeName}`);
//     console.log(`Basic Salary: ${basicSalary}`);
//     let deductions = 0.1 * basicSalary;
//     console.log(`Deductions: ${deductions}`);
//     let netSalary = basicSalary - deductions;
//     console.log(`Net Salary: ${netSalary}`);
// })("Ms.Eva", 50000);
