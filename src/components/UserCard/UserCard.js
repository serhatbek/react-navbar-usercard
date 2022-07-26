import axios from 'axios';
import { useEffect, useState } from 'react';
import './UserCard.scss';

const usersData = 'https://randomuser.me/api/?results=12';

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
        <div className='user-card' key={user.dob.date}>
          <div className='user-card__img flexRowCenter'>
            <figure>
              <img src={user.picture.large} alt={user.name.first} />
            </figure>
          </div>
          <div className='user-card__info'>
            <span>{`${user.name.first} ${user.name.last}`}</span>
            <span>{user.dob.age}</span>
            <span>{user.email}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default UserCard;
