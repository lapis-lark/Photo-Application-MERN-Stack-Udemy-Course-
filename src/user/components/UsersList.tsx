import React, { FC } from "react";
import UserItem from './UserItem';
import './UsersList.css';
import { UsersListProps, User } from '../../types/types';



const UsersList: FC<UsersListProps> = ({items}) => {

  if (items.length === 0) {
    return (
      <div className="center">
        <h2>No users found</h2>
      </div>
    )
  } else {
    return (
      <ul className="users-list">
        {items.map((user: User) => (
          <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image} 
            name={user.name} 
            placeCount={user.placeCount}  
          />
        ))}
      </ul>
    )
  }
}

export default UsersList;