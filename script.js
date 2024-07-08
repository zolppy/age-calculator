const form = document.querySelector("form");

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

const showAge = (age) => {
  const element = document.querySelector("span");

  element.textContent = `${age} anos.`;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const birthdayInput = this.querySelector("input");
  const birthday = birthdayInput.value;
  const age = calculateAge(birthday);

  showAge(age);
});
