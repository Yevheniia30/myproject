const formRef = document.querySelector('.form');
const inputRef = document.querySelector('.input');
const textareaRef = document.querySelector('.area');

const savedMessage = localStorage.getItem('feedback-message');
if (savedMessage) {
  textareaRef.value = savedMessage;
}

const formSubmitHandler = event => {
  event.preventDefault();
  console.log('send feedback');
  localStorage.removeItem('feedback-message');
  event.currentTarget.reset();
};

const textareaInputHandler = event => {
  console.log(event.currentTarget.value);

  localStorage.setItem('feedback-message', event.currentTarget.value);
};

formRef.addEventListener('submit', formSubmitHandler);
textareaRef.addEventListener('input', textareaInputHandler);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };

// localStorage.setItem('Theme', Theme.LIGHT);
