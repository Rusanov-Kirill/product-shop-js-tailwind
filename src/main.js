import { Header } from './components/header.js';

const app = document.getElementById('app');

function renderApp() {
  const header = Header();

  app.appendChild(header);
}

renderApp();