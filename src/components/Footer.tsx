import * as React from 'react';
import styles from './Footer.module.css';

export function Footer () {
  return (
    <footer className={styles.footer}>
    <p>
      <span> React + TS to-do </span>
      @2023
    </p>
  </footer>
);
}
