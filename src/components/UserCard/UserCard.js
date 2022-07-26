import './UserCard.scss';

const UserCard = ({ picture, userName, lastName, age, email }) => {
  return (
    <div className='user-card'>
      <div className='user-card__img flexRowCenter'>
        <figure>
          <img src={picture} alt={userName} />
        </figure>
      </div>
      <div className='user-card__info'>
        <span>{`${userName} ${lastName}`}</span>
        <span>{age}</span>
        <span>{email}</span>
      </div>
    </div>
  );
};

export default UserCard;
