import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface UserListProps {
  users: User[];
  onDelete: (id: number) => void;
  onEdit: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Nombre: {user.name}</p>
            <p>Correo Electrónico: {user.email}</p>
            <p>Telefono : {user.phone}</p>
            <button onClick={() => onEdit(user)}>Editar</button>
            <button onClick={() => onDelete(user.id)}>Eliminar</button>
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
