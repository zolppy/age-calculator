const form = document.querySelector("form");
const okButton = document.querySelector(".ok-button");

const calculateAge = (birthday) => {
  let age = 0;
  const currentDate = new Date();
  const birthdayDate = new Date(birthday);

  const birthYear = birthdayDate.getFullYear();
  const birthMonth = birthdayDate.getMonth();
  const birthDay = birthdayDate.getDate();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  age = currentYear - birthYear;

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    age--;
  }

  return age;
};

const disableAll = (element) => {
  const inputs = element.querySelectorAll("input");
  const buttons = element.querySelectorAll("button");

  inputs.forEach((input) => {
    input.disabled = true;
  });

  buttons.forEach((button) => {
    button.classList.add("cursor-not-allowed");
  });
};

const enableAll = (element) => {
  const inputs = element.querySelectorAll("input");
  const buttons = element.querySelectorAll("button");

  inputs.forEach((input) => {
    input.disabled = false;
  });

  buttons.forEach((button) => {
    button.classList.remove("cursor-not-allowed");
  });
};

const showAge = (age) => {
  const box = document.querySelector(".box");
  const ageContainer = box.querySelector(".age");

  ageContainer.textContent = `${age} anos`;
  box.classList.replace("hidden", "block");
};

const hiddenAge = () => {
  const box = document.querySelector(".box");

  box.classList.replace("block", "hidden");
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdayInput = this.querySelector("input");
  const birthday = birthdayInput.value;
  const age = calculateAge(birthday);

  showAge(age);
  disableAll(this);
});

okButton.addEventListener("click", () => {
  hiddenAge();
  enableAll(form);
});
