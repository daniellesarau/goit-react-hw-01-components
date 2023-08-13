import React from 'react';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th className={css.transaction_title}>Type</th>
          <th className={css.transaction_title}>Amount</th>
          <th className={css.transaction_title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
