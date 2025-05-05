document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("employeeForm");

  const fields = [
    {
      id: "empid",
      regex: /^EMP\d{3}$/,
      message: "Employee ID must be in format EMP123"
    },
    {
      id: "fullname",
      regex: /^[A-Za-z\s]+$/,
      message: "Name must only contain letters and spaces"
    },
    {
      id: "email",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format"
    },
    {
      id: "phone",
      regex: /^\d{11}$/,
      message: "Phone must be 10 digits"
    },
    {
      id: "password",
      regex: /^.{6,}$/,
      message: "Password must be at least 6 characters"
    },
    {
      id: "department",
      validate: (val) => val !== "",
      message: "Please select a department"
    },
    {
      id: "joiningdate",
      validate: (val) => val !== "",
      message: "Joining date cannot be empty"
    }
  ];

  fields.forEach(({ id, message }) => {
    const input = document.getElementById(id);

    // Create message span
    const span = document.createElement("div");
    span.classList.add("validation-message");
    span.textContent = message;
    input.insertAdjacentElement("afterend", span);
  });

  form.addEventListener("input", () => {
    fields.forEach(({ id, regex, validate }) => {
      const input = document.getElementById(id);
      const value = input.value.trim();
      const isValid = validate ? validate(value) : regex.test(value);

      if (!isValid) {
        input.classList.add("invalid");
      } else {
        input.classList.remove("invalid");
      }
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let allValid = true;

    fields.forEach(({ id, regex, validate }) => {
      const input = document.getElementById(id);
      const value = input.value.trim();
      const isValid = validate ? validate(value) : regex.test(value);

      if (!isValid) {
        input.classList.add("invalid");
        allValid = false;
      } else {
        input.classList.remove("invalid");
      }
    });

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      alert("Please select a gender.");
      allValid = false;
    }

    if (!allValid) return;

    // Display data if valid
    const outputDiv = document.getElementById("output");
    const genderVal = gender ? gender.value : "";
    outputDiv.innerHTML = `
      <h2>Registered Employee Details:</h2>
      <p><strong>Employee ID:</strong> ${document.getElementById("empid").value}</p>
      <p><strong>Full Name:</strong> ${document.getElementById("fullname").value}</p>
      <p><strong>Email:</strong> ${document.getElementById("email").value}</p>
      <p><strong>Phone:</strong> ${document.getElementById("phone").value}</p>
      <p><strong>Password:</strong> ${document.getElementById("password").value}</p>
      <p><strong>Department:</strong> ${document.getElementById("department").value}</p>
      <p><strong>Joining Date:</strong> ${document.getElementById("joiningdate").value}</p>
      <p><strong>Gender:</strong> ${genderVal}</p>
    `;

    form.reset();
  });
});
