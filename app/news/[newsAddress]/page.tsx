import Container from '@/components/ui/container';
import News from '@/models/News';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const SingleNews = async ({
  params,
}: {
  params: {
    newsAddress: string;
  };
}) => {
  const news = await News.findOne({
      address: decodeURI(params.newsAddress),
    });

  if (!news) notFound();

  return (
    <div>
      <Container>
        <div className='flex flex-col gap-y-10'>
          <div className='relative h-120 w-full overflow-hidden rounded-b-md shadow-lg md:h-96'>
            <Image
              src={`/assets/news_images/${news.image}`}
              alt={news.title}
              sizes='100vw'
              fill
              className='transition-transform'
              quality={100}
            />
          </div>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>{news.title}</h1>
            <p className='text-justify text-lg'>{news.body}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleNews;
