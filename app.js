const form = document.querySelector("#signup-form");

if (form) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const seatsInput = document.querySelector("#seats");
  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const seatsError = document.querySelector("#seats-error");
  const success = document.querySelector("#success");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    success.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const seats = Number(seatsInput.value);
    let valid = true;

    if (name === "") {
      nameError.textContent = "Please write your name.";
      valid = false;
    } else {
      nameError.textContent = "";
    }

    if (email === "" || !email.includes("@")) {
      emailError.textContent = "Please write a valid email.";
      valid = false;
    } else {
      emailError.textContent = "";
    }

    if (seatsInput.value === "" || seats < 1 || seats > 5) {
      seatsError.textContent = "Seats must be a number from 1 to 5.";
      valid = false;
    } else {
      seatsError.textContent = "";
    }

    if (valid) {
      success.textContent = "Thank you, " + name + "! You are registered.";
      form.reset();
    }
  });
}