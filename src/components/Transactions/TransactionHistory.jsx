import PropTypes from 'prop-types';
import { Transaction } from '../Transactions/Transaction';
import css from '../Transactions/TransactionHistory.module.css';

export function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className={css.tr} key={item.id}>
            <Transaction transaction={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
