import React from 'react';
import FriendListItem from '../FriendsListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}
