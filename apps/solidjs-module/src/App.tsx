import type { Component } from 'solid-js';
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div className={styles.container}>
      <header>
        This is a self contained SolidJs module!
      </header>
    </div>
  );
};

export default App;