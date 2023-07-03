import React, { useState } from 'react';

function Form() {
  const form = document.querySelector("#signup-form");
  const nameField = document.querySelector("#name");
  const emailField = document.querySelector("#email");
  const genderField = document.querySelector("#gender");
  const phoneField = document.querySelector("#phone-number");
  const passwordField = document.querySelector("#password");
  const errorMessage = document.querySelector("#error-message");
  const welcomeMessage = document.querySelector("#welcome-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const gender = genderField.value.trim();
  const phone = phoneField.value.trim();
  const password = passwordField.value.trim();

  errorMessage.innerHTML = "";
  welcomeMessage.innerHTML = "";

  if (!name || !email || !gender || !phone || !password) {
    errorMessage.innerHTML = "All fields are mandatory";
    return;
  }

  if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
    errorMessage.innerHTML = "Name is not alphanumeric";
    return;
  }

  if (!/@/.test(email)) {
    errorMessage.innerHTML = "Email must contain @";
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    errorMessage.innerHTML = "Phone Number must contain only numbers";
    return;
  }

  if (password.length < 6) {
    errorMessage.innerHTML = "Password must contain at least 6 letters";
    return;
  }

  if (!["male", "female", "other"].includes(gender.toLowerCase())) {
    errorMessage.innerHTML = "Please identify as male, female or others";
    return;
  }

  const username = email.split("@")[0];
  welcomeMessage.innerHTML = `Hello ${username}`;
});
};
  return (
    <div>
      <form id="signup-form">
        <label for="name">Name:</label>
        <input type="text" id="name" data-testid ="name" >
        <label for ="email">Email:</label>
        <input type="email" id="email" data-testid="email" required><br>

        <label for="gender">Gender:</label>
        <select id="gender" data-testid="gender" required>
        <option value="male" selected>Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br>

    <label for="phone-number">Phone Number:</label>
    <input type="tel" id="phone-number" data-testid="phoneNumber" required><br>

     <label for="password">Password:</label>
    <input type="password" id="password" data-testid="password" minlength="6" required><br>

  <button type="submit" data-testid="submit">Submit</button>
</form>

<div id="error-message"></div>
<div id="welcome-message"></div>
    </div>
  );
}

export default Form;