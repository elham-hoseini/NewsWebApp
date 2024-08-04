'use client';

import { useRef, useState } from 'react';
import SubmitButton from '../ui/submit-button';
import { CreateNewsAction } from '@/actions/news-action';

const NewNewsForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [imageName,setImageName] = useState("");

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
    }
};

  return (
    <form
      ref={formRef}
      action={async (formdata) => {
        formdata.delete('image')
        formdata.append('image', imageName)

        formRef.current?.reset();
        await CreateNewsAction(formdata);
      }}
      className='space-y-6'
    >
      <div className='flex flex-col gap-y-1'>
        <label>عنوان</label>
        <input
          type='text'
          className='rounded-md border p-2 shadow-sm'
          placeholder='خبر جدید'
          name='title'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
        <label>توضیحات</label>
        <textarea
          rows={5}
          className='rounded-md border p-2 shadow-sm'
          placeholder='شرح خبر'
          name='body'
        />
      </div>
      <div className='flex flex-col gap-y-1'>
          <label>تصویر</label>
            <input
              type='file'
              accept='image/*'
              className='rounded-md border p-2 shadow-sm'
              name='image'
              onChange={handleImageChange}
            />
      </div>
      <SubmitButton />
    </form>
  );
};

export default NewNewsForm;
