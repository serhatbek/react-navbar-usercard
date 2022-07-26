import UserCard from '../../UserCard/UserCard';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <h1>Users</h1>
      <div className='container'>
        <div className='box'>
          <UserCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
