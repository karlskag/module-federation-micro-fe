import React from 'react';
import ReactModule from "./components/ReactModule";

function App() {
  return (
    <div>
      <header>
        This is the application SHELL ~
      </header>
      It's job is to consume micro-frontends served with Webpack module federation
      <br />
      <a href="https://webpack.js.org/concepts/module-federation/">Read more in the webpack docs</a>
      <ReactModule />
    </div>
  );
}

export default App;
