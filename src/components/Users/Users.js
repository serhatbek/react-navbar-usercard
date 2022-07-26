import axios from 'axios';
import { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';

const usersData = 'https://randomuser.me/api/?results=12';

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios(usersData);
    const data = await response.data.results;

    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.dob.date}
          picture={user.picture.large}
          userName={user.name.first}
          lastName={user.name.last}
          age={user.dob.age}
          email={user.email}
        />
      ))}
    </>
  );
};

export default Users;
