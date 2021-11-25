import PropTypes from 'prop-types';

export default function FriendList(props) {
  const { friends } = props;
  return (
    <ul className="friend-list">
      {friends.map(({ isOnline, id, avatar, name }) => (
        <li className="item" key={id}>
          <span className="status">{isOnline}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  friends: PropTypes.array,
};
