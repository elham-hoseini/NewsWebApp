'use client';

import SubmitButton from '../ui/submit-button';
import { signIn } from 'next-auth/react';
import { checkUserEmail } from '@/actions/auth-action';
import { useState } from 'react';

const LoginForm = () => {
  const [error,setError] = useState("")
  const [incorrectPass,setIncorrectPass] = useState("")
  return (
    <form
      action={async (formdata) => {
        const email = formdata.get('email');
        const password = formdata.get('password');
        const res = await checkUserEmail(formdata);
        if (!res?.success) {
          setError("ایمیل اشتباه است. دوباره تلاش کنید")
        } else {
        if(password==="" || !password)
          setError("پسورد را وارد کنید")
        else {
         const response= await signIn('credentials', {
            email,
            password,
            redirect: false,
          }) as {error?:string};
          console.log("sssss"+response)
          if(!response.error)
            window.location.replace('/')
          else
            setIncorrectPass('پسورد اشتباه است')
        }
      }
      }}
      className='mx-auto flex w-96 flex-col gap-y-5'
    >
      <h2 className='text-3xl font-bold'>ورود</h2>
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
      {incorrectPass && <p className='text-red-700 font-bold'>{incorrectPass}</p>}
    </form>
  );
};

export default LoginForm;
