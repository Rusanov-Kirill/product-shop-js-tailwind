export function createElement(tag, className = '', text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

export function createElementWithChildren(tag, className = '',children = [], text = '') {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  children.forEach(child => element.appendChild(child));
  return element;
}