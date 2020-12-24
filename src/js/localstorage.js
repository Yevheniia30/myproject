const inputRef = document.querySelector('.input');
const textareaRef = document.querySelector('.area');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', Theme.LIGHT);
