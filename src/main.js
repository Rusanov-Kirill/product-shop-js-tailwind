import { Header } from './components/header.js';
import { HeroSection } from './components/heroSection.js';

const app = document.getElementById('app');

function renderApp() {
  const header = Header();
  const heroSection = HeroSection();

  app.appendChild(header);
  app.appendChild(heroSection);
}

renderApp();