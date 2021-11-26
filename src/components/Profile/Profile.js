import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile(props) {
  const { username, tag, location, avatar, stats } = props;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.profilename}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsitem}>
          <span className={s.label}>Followers</span>
          <span className={s.statsquantity}>{stats.followers}</span>
        </li>
        <li className={s.statsitem}>
          <span className={s.label}>Views</span>
          <span className={s.statsquantity}>{stats.views}</span>
        </li>
        <li className={s.statsitem}>
          <span className={s.label}>Likes</span>
          <span className={s.statsquantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
