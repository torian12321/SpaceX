import React from 'react';
import  { ILaunchCardList } from './LaunchCard.interfaces';
import styles from './LaunchCard.module.css';

const List = ({ children }: ILaunchCardList) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default List;
