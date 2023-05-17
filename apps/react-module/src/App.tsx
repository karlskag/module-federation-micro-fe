import React from 'react'
import styles from './App.module.css'
import SolidModule from './components/SolidModule'

function App() {
  return (
    <div className={styles.container}>
      <header>
        This is a self contained React module!
      </header>
      <SolidModule />
    </div>
  );
}

export default App;
