const form = document.getElementById("employee-form");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("full-name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const empId = document.getElementById("emp-id").value;

  const output = `
    <h2>Employee Details</h2>
    <p>Full Name: ${fullName}</p>
    <p>Age: ${age}</p>
    <p>Gender: ${gender}</p>
    <p>Employee ID: ${empId}</p>
  `;

  outputDiv.innerHTML = output;
});

