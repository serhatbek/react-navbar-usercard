import './Home.scss';
import Users from '../../components/Users/Users';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <h1>Users</h1>
        <div className='box'>
          <Users />
        </div>
      </div>
    </div>
  );
};

export default Home;
