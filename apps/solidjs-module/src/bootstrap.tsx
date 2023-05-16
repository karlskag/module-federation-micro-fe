/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

const mount = (root: HTMLElement) => {
  render(() => <App />, root)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('root');
  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
