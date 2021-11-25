import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

export default function FriendListItem(props) {
    const { isOnline, avatar, name } = props;
    return (
          <li className={s.item}>
            <span className={isOnline ? [s['online']] : [s['offline']]}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        )
  }

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };