import React from 'react';
import classNames from 'classnames';
import  { ILoader } from './Loader.interfaces';
import styles from './Loader.module.css';

const Loader = ({ className }: ILoader) => (
  <div className={classNames(
    styles.loader,
    className,
  )} />
);

export default Loader;
