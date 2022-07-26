import axios from 'axios';
import { useEffect, useState } from 'react';

const usersData = 'https://randomuser.me/api/?results=10';

const UserCard = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios(usersData);
    const data = await response.data.results;

    console.log(data);

    return setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {users.map((user) => (
        <div className='user-card'>
          <h3>{user.name.first}</h3>
        </div>
      ))}
    </>
  );
};

export default UserCard;
