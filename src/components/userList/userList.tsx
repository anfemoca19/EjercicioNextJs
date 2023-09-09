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
      <h2 className="text-2xl font-semibold mb-4 text-center">Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className=''>
            <p className='text-center '>Nombre: {user.name}</p>
            <p className='text-center'>Correo Electrónico: {user.email}</p>
            <p className='text-center'>Telefono : {user.phone}</p>
            <div className='flex justify-center mt-5'>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => onEdit(user)}>Editar</button>
              <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => onDelete(user.id)}>Eliminar</button>
            </div>
            
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
