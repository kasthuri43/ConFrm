function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMessage = document.getElementById("error-message");

  if (!name || !email || !message) {
    errorMessage.textContent = "Please fill in all fields.";
    return false;
  }

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }

  errorMessage.textContent = "";
  alert("Form submitted successfully!");
  return true;
}
