'use client';

import { signOut } from 'next-auth/react';

type UserProp = {
  name: string;
};

const User = ({ name }: UserProp) => {
  return (
    <div className='flex items-center justify-between gap-x-6'>
      <div className='flex size-50 items-center justify-center'>
        <span className='text-xl font-bold'>{name}</span>
      </div>
      <button
        className='rounded-md bg-indigo-500 px-3 py-2 text-white hover:bg-gray-800'
        onClick={(e) => {
          e.preventDefault();
          signOut({
            callbackUrl: '/',
          });
        }}
      >
        خروج
      </button>
    </div>
  );
};

export default User;
