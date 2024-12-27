import React, { FC } from "react";
import './UserItem.css';
import { User } from '../../types/types';

const UserItem: FC<User> = ({id, image, name, placeCount}) => {
  return (
    <li className="user-item">
      <div key={String(id)} id={String(id)}><a href={image}>{name}: {placeCount} places</a>
      </div>
    </li>
  )
}

export default UserItem;