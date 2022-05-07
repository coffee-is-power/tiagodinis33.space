import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root')!);
async function render() {
  let Component
  switch (window.location.hash) {
    case "#/about-me":
      Component = (await import('./AboutMe')).default
      break;
    default:
      Component = (await import('./App')).default;
      break; 
  }
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  )
}
render();
window.addEventListener('hashchange', render)