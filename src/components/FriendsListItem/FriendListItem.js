import React from 'react';
import css from './FriendsListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.status__true : css.status__false}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}> {name}</p>
    </li>
  );
}
