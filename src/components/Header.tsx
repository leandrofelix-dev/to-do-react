import * as React from 'react';
import styles from './Header.module.css';

export function Header () {
return (
  <header className={styles.header}>
    <h1>React to-do</h1>
  </header>
);
}
