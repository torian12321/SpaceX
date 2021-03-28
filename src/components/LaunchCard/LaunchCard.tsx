import React from 'react';
import List from './LaunchCard.List';
import  { ILaunchCard } from './LaunchCard.interfaces';
import styles from './LaunchCard.module.css';

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth()}${d.getFullYear()}`;
}

const Card = ({ title, details, date }: ILaunchCard) => {

  return (
    <article className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      <p>{details}
      </p>
      <span className={styles.date}>
        {formatDate(date)}
      </span>
    </article>
  );
};

Card.List = List;

export default Card;
