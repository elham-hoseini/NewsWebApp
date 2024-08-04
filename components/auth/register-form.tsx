'use client';

import { checkUserEmail, createUserAction } from '@/actions/auth-action';
import SubmitButton from '../ui/submit-button';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const RegisterForm = () => {
 const [error, setError] = useState("");

  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res1 = await checkUserEmail(formdata);
        if (res1?.success) 
          setError("ایمیل تکراری است");

         else{
        const res2 = await createUserAction(formdata);

        if (res2?.success) {
             redirect('/login')
        }
        }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>نام نویسی</h2>
      <input
        type='text'
        placeholder='نام'
        className='rounded-md border p-2 shadow-sm'
        name='name'
      />
      <input
        type='email'
        placeholder='ایمیل'
        className='rounded-md border p-2 shadow-sm'
        name='email'
      />
      <input
        type='password'
        placeholder='رمز عبور'
        className='rounded-md border p-2 shadow-sm'
        name='password'
      />
      <SubmitButton />
      {error && <p className='text-red-700 font-bold'>{error}</p>}
    </form>
  );
};

export default RegisterForm;
