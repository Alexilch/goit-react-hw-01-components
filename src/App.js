import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import Statistics from './components/Statistics/Statistics';
import data from './components/Statistics/data.json';

import FriendList from './components/FriendList/FriendList';
import friends from './components/FriendList/friends.json';
function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;{/* <Statistics stats={data} />; */}
      <FriendList friends={friends} />,
    </div>
  );
}

export default App;
