import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const mount = (el: HTMLElement) => {
  const root = ReactDOM.createRoot(el);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root')
  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
