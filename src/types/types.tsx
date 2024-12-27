export interface UsersListProps {
  items: Array<User>;
}

export interface User {
  id: number;
  image: string;
  name: string;
  placeCount: number; 
}

