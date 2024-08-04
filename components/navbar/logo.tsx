import { cn } from '@/libs/utils';
import logo from '@/public/assets/general/news.png';
import Image from 'next/image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('relative size-10', className)}>
      <Image src={logo} alt='news-logo' fill sizes='100vw' />
    </div>
  );
};

export default Logo;
