import React from 'react';
import Profile from 'components/Profile/Profile';
import user from '../src/data/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from '../src/data/data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from '../src/data/friends.json';

// import FriendListItem from 'components/FriendListItem';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../src/data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data}></Statistics>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
