'use server';

import { connectDB } from '@/libs/dbConnect';
import News from '@/models/News';
import { revalidatePath } from 'next/cache';

export const CreateNewsAction = async (formdata: FormData) => {

    console.log(formdata)

    await connectDB();
    const { title, body, image } = Object.fromEntries(formdata);
    const address = String(title).split(' ').join('-');


    try{

      
    const news = await News.create({
      title,
      address,
      body,
      image
  });

  news.save();

    if (!news) return { success: false };

    revalidatePath('/admin');

    return { success: true };
}
 catch (error) {
    console.log('CreateNewsAction', error);
  }
};

export const DeleteNewsAction = async (id: number) => {
  await connectDB();
  try {

    await News.findByIdAndDelete(id);

    revalidatePath('/admin');
  } catch (error) {
    console.log('DeleteNewsAction', error);
  }
};
