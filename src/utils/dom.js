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
  children.filter(child => child !== null).forEach(child => element.appendChild(child));
  return element;
}

export function addChilds(elem, ...args) {
  if (!args.length) return elem;
  
  for (let arg of args) {
    elem.appendChild(arg);
  }
}