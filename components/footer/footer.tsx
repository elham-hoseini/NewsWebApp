import youtubeLogo from '@/public/assets/general/youtube.png';
import instagramLogo from '@/public/assets/general/instagram.png';
import telegramLogo from '@/public/assets/general/telegram.png';
import Container from '@/components/ui/container';
import Logo from '../navbar/logo';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import Image from 'next/image';

const socialIcons = [
  {
    label: 'instagram',
    logo: instagramLogo,
    size: 'size-8',
    href: 'https://instagram.com',
  },
  {
    label: 'telegram',
    logo: telegramLogo,
    size: 'size-8',
    href: 'https://telegram.org',
  },
  {
    label: 'youtube',
    logo: youtubeLogo,
    size: 'size-10',
    href: 'https://youtube.com',
  },
];

const Footer = () => {
  return (
    <div className='mt-8 border-t bg-indigo-950'>
      <Container>
        <div className='flex flex-col justify-between gap-y-8 py-8 text-white md:flex-row'>
          <div className='flex flex-col items-center gap-y-4 md:items-start'>
            <div className='flex items-center gap-x-3'>
              <Logo className='invert' />
              <h2 className='text-3xl font-bold'>خبر داغ روز</h2>
            </div>
            <p className='w-96 text-balance text-center text-gray-300 md:text-right'>

              استفاده از اخبار با ذکر منبع مجاز است.
            </p>
          </div>

          <div className='flex flex-col items-center gap-y-4 md:items-end'>
            <div className='flex items-center justify-center gap-x-4'>
              {socialIcons.map(({ href, label, logo, size }) => (
                <div key={label} className={cn('relative', size)}>
                  <Link href={href}>
                    <Image
                      src={logo}
                      alt={label}
                      fill
                      sizes='100vw'
                      className='opacity-50 invert hover:opacity-100'
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div>
              <p className='text-gray-500'>
                Copyright &copy; | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
