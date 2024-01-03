const button = document.querySelector('.submit');
const inputs = document.querySelectorAll('.input');
const result = document.querySelector('.result');

const getUsername = () => {
  return inputs[0];
  // Step 3
  // return inputs[0].value;
};

const getAge = () => {
  return inputs[1];
  // Step 3
  // return inputs[1].value;
};

button.addEventListener('click', () => {
  // Step 2
  // debugger;
  const userName = getUsername();
  const age = getAge();
  // Step 1
  // console.log(userName);
  result.textContent = `${userName} is ${age} years old`;
});
