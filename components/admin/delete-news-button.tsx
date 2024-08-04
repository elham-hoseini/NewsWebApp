'use client';

import { DeleteNewsAction } from '@/actions/news-action';
import { Trash } from 'lucide-react';

type DeleteNewsButtonProps = {
  id: number;
};

const DeleteNewsButton = ({ id }: DeleteNewsButtonProps) => {
  return (
    <button
      className='rounded-md bg-gray-100 p-4 text-rose-500 shadow-md hover:bg-gray-200'
      onClick={(e) => {
        e.preventDefault();
        DeleteNewsAction(id);
      }}
    >
      <Trash className='size-5' />
    </button>
  );
};

export default DeleteNewsButton;
