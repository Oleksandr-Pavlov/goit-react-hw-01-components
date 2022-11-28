import PropTypes from 'prop-types';
import { Friend } from './Friend';
import css from '../Friends/FriendsList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};