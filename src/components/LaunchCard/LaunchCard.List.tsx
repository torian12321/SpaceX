import React from 'react';
// import  { ILaunchCard } from './LaunchCard.interfaces';
import styles from './LaunchCard.module.css';

const List = ({ children }: any) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default List;
