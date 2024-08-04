import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import News from '@/models/News';
import DeleteNewsButton from './delete-news-button';
import { connectDB } from '@/libs/dbConnect';

const AdminNewsList = async () => {

  try{
    connectDB();
    const news = await News.find().sort({ createdAt: 1 });

  if (news && news.length)
  return (
    <div>
      <div className='space-y-4'>
        {news.map((news_item) => (
          <div key={news_item.id} className='flex gap-x-2'>
            <div className='flex flex-1 items-start gap-x-4 rounded-md bg-gray-100 px-3 py-4 shadow-sm'>
              <div className='relative size-20'>
                <Image
                  src={`/assets/news_images/${news_item.image}`}
                  alt={news_item.title}
                  unoptimized 
                  fill
                  sizes='100vw'
                  className='rounded-md border object-cover shadow-md'
                />
              </div>
              <h3 className='text-2xl font-bold'>{news_item.title}</h3>
            </div>
            <div className='flex flex-col gap-y-2'>
              <DeleteNewsButton id={news_item.id} />

              <Link
                href={`/news/${news_item.address}`}
                className='rounded-md bg-gray-100 p-4 text-blue-500 shadow-md hover:bg-gray-200'
              >
                <ExternalLink className='size-5' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
catch (error) {
  // Handle the error (e.g., log it or display a friendly message)
}
};

export default AdminNewsList;
