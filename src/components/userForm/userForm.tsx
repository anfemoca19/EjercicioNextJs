import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface UserFormProps {
  onSubmit: (data: any) => void;
  user?: User; // Para edición de usuario (opcional)
}

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, user }) => {

  const { register, handleSubmit, reset } = useForm<User>();

  const onSubmitForm: SubmitHandler<User> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div>
      <form  className="w-full max-w-sm"onSubmit={handleSubmit(onSubmitForm)}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Nombre
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              type="text"
              id="name"
              {...register('name', { required: true })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600">
            Número de Teléfono
          </label>
          <input
            type="text"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Agregar Usuario
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
