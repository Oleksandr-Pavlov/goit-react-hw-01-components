import { Profile } from './Profile/Profile';
import { StatsList } from './Statistics/StatsList';
import { FriendList } from './Friends/FriendsList'
import { TransactionHistory } from './Transactions/TransactionHistory';
import user from '../hw-data/user.json';
import stats from '../hw-data/stats.json';
import friends from '../hw-data/friends.json'
import transactions from '../hw-data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile user={user}/>
      <StatsList title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
