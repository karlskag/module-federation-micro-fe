import React from 'react';
import styles from './App.module.css'
import ReactModule from "./components/ReactModule";
import SolidModule from "./components/SolidModule";
import VueModule from "./components/VueModule";

function App() {
  return (
    <div className={styles.container}>
      <header>
        This is the application SHELL ~
      </header>
      It's job is to consume micro-frontends served with Webpack module federation
      <br />
      <a href="https://webpack.js.org/concepts/module-federation/">Read more in the webpack docs</a>
      <div className={styles.remotesContainer}>
        <ReactModule />
        <SolidModule />
        <div className={styles.lgModule}>
          <VueModule />
        </div>
      </div>
    </div>
  );
}

export default App;
