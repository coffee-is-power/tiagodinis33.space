import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
let Component
switch (window.location.pathname) {
  case "/about-me":
    Component = import('./AboutMe')
    break;
  default:
    Component = import('./App');
    break; 
}
(async () => {
  let Comp = (await Component).default;
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <Comp />
    </React.StrictMode>
  )
})();
