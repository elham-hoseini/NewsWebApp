import Container from '@/components/ui/container';
import Image from 'next/image';
import Link from 'next/link';

import intro from '@/public/assets/general/intro.png';

const HomePage = () => {
  return (
    <div>
      <Container className='pt-8 md:py-4'>
        <div className='flex flex-col-reverse items-center md:flex-row'>
          <div className='flex-1'>
            <div className='flex flex-col items-center gap-y-7 pr-0 md:items-start md:pr-5 lg:pr-16 xl:pr-28'>
              <h1 className='text-5xl font-bold lg:text-6xl'>خبر داغ روز</h1>
              <p className='text-balance text-center text-lg md:text-right lg:text-xl'>
              خوش آمدید به سایت خبری ما. ما در اینجا به شما آخرین اخبار ملی و بین‌المللی، تحلیل‌ها، گزارش‌های ویژه و موارد دیگر را ارائه می‌دهیم. با ما همراه باشید تا همیشه در جریان اخبار باشید.
              </p>
              <Link
                href='/news'
                className='w-auto rounded-md bg-indigo-500 px-7 py-3 text-xl font-bold text-white hover:bg-gray-800'
              >
                خبر داغ روز
              </Link>
            </div>
          </div>
          <div className='flex-1 md:block'>
            <div className='relative m-auto size-[24rem] md:size-[28rem] lg:size-[32rem]'>
              <Image
                src={intro}
                alt='introduction'
                fill
                sizes='100vw'
                quality={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
