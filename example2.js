const button = document.querySelector('.submit');
const inputs = document.querySelectorAll('.input');
const result = document.querySelector('.result');

const getUsername = () => {
  return inputs[0].value;
};

const getAge = () => {
  return inputs[1].value;
};

const increaseNumber = (number) => {
  return number + 1;
  // Step 2
  // return parseInt(number) + 1;
};

button.addEventListener('click', () => {
  const userName = getUsername();
  const age = getAge();
  // Step 1
  // debugger;
  const nextAge = increaseNumber(age);

  result.textContent = `${userName} is ${age} years old and will be ${nextAge} next year`;
});
