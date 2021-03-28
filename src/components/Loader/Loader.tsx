import React from 'react';
import classNames from 'classnames';
import  { ILoader } from './Loader.interfaces';
import styles from './Loader.module.scss';

const Loader = ({ className }: ILoader) => (
  <div
    aria-label='Loading'
    className={classNames(
      styles.loader,
      className,
    )}
  />
);

export default Loader;
