const createBox = title => {
  const div = document.createElement('div');
  div.textContent = title;

  return div;
};
export default createBox;
