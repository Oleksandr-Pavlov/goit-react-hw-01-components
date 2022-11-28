import PropTypes from 'prop-types';
import css from '../Friends/Friend.module.css';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <span className={isOnline ? css.online : css.offline}></span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
