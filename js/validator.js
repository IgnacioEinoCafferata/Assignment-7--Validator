document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
    const errorDiv = document.getElementById("errorDiv");
    const errorList = document.getElementById("errorList");
    const closeBtn = document.getElementById("closeError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
 
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      errorList.innerHTML = "";
      let errors = [];
 
      const username = document.getElementById("username").value.trim();
      const email = emailInput.value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
 
      if (!username) errors.push("Username is required.");
      if (!email || !email.includes("@") || !email.includes(".")) errors.push("Invalid email address.");
      if (password.length < 6) errors.push("Password must be at least 6 characters long.");
      if (password !== confirmPassword) errors.push("Passwords do not match.");
 
      if (errors.length > 0) {
        errorDiv.classList.remove("hidden");
        errors.forEach(err => {
          const li = document.createElement("li");
          li.textContent = err;
          errorList.appendChild(li);
        });
      } else {
        errorDiv.classList.add("hidden");
        form.submit();
      }
    });
 
    closeBtn.addEventListener("click", () => {
      errorDiv.classList.add("hidden");
    });
 
    emailInput.addEventListener("input", () => {
      const value = emailInput.value;
      if (value && (!value.includes("@") || !value.includes("."))) {
        emailError.textContent = "Invalid email format";
      } else {
        emailError.textContent = "";
      }
    });
  });
 
