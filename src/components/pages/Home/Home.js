import Users from '../../Users/Users';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <h1>Users</h1>
      <div className='container'>
        <div className='box'>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Home;
