import React from 'react';
import List from './LaunchCard.List';
import  { ILaunchCard } from './LaunchCard.interfaces';
import styles from './LaunchCard.module.scss';

const formatDate = (date: string) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth()}${d.getFullYear()}`;
}

const Card = ({ id, title, details, date, onClick }: ILaunchCard) => {
  const handleOnClick = () => {
    onClick(id);
  };

  return !!details ? (
    <article className={styles.card} onClick={handleOnClick} role='button'>
      <h1 className={styles.title}>{title}</h1>
      <p>{details}
      </p>
      <span className={styles.date}>
        {formatDate(date)}
      </span>
    </article>
  ) : null;
};

Card.List = List;

export default Card;
