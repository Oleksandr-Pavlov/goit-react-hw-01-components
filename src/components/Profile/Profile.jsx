import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css'

export function Profile({ user: { username, tag, location, avatar, stats } }) {
  return (
    <div className={css.profile}>
      <div className={css.decsr}>
        <img src={avatar} alt={username} />
        <p className={css.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.stat}>
          <span>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};