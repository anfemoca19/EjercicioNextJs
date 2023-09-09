"use client"

import React, { useState } from 'react';
import UserList from '../../components/userList/userList'
import UserForm from '../../components/userForm/userForm'



interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const Form: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const addUser = (user: User) => {
    user.id = users.length + 1; 
    setUsers([...users, user]);
  };

  const editUser = (user: User) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  const deleteUser = (id: number) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <main className="flex  container justify-center flex-col items-center mx-auto p-4">
        <h1 className="text-3xl text-center mt-10 mb-8">Formulario</h1>
        <UserForm onSubmit={addUser} />
        {editingUser ? (
          <div>
            <h2>Editar Usuario</h2>
            <UserForm onSubmit={updateUser} user={editingUser} />
          </div>
        ) : null}
        <UserList users={users} onDelete={deleteUser} onEdit={editUser} />
      </main>
    </div>
  );
};

export default Form;

