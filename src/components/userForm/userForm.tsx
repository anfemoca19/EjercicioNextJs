import React from 'react';
import { useForm, SubmitHandler} from 'react-hook-form';

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

  const { register, handleSubmit, reset, formState:{
    errors
  } } = useForm<User>();

  console.log(errors)

  const onSubmitForm: SubmitHandler<User> = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="w-full max-w-xs  flex	justify-center mb-8">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmitForm)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inline-full-name">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { 
                required:{
                  value :true,
                  message:'El nombre es obligatorio'
                },
                minLength:3,
                maxLength:15
              })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {
              errors.name?.message && <span className='text-red-200'>{errors.name.message}</span>
            }
          </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: {
                value:true,
              message:'El correo es obligatorio'
            }, })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {
              errors.email && <span className='text-red-200'>{errors.email.message}</span>
            }
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-600">
            Número de Teléfono
          </label>
          <input
            type="text"
            id="phone"
            {...register('phone')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {
              errors.phone && <span className='text-red-200'>El numero es requerido</span>
            }
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
