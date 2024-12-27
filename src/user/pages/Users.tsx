import React, { FC } from 'react';
import UsersList from '../components/UsersList';
import { User } from '../../types/types';


const Users: FC = () => {
  const USERS: Array<User> = [{id: 1, name: "Jill Rand", placeCount: 12, image: "https://webstockreview.net/images/potato-clipart-kawaii-16.png"}];  
  
  return (
    <UsersList items={USERS} /> 
  )
};

export default Users;