import PropTypes from 'prop-types';
import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

export default function FriendList({friends}) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          ))}
    </ul>
  )
}

FriendList.propTypes = {
friend:PropTypes.arrayOf(PropTypes.object,),
}