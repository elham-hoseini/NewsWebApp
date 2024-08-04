import { getServerSession } from 'next-auth';
import Link from 'next/link';
import User from './user';
import { authOption } from '@/libs/next-auth';


const UserAvatar = async () => {
  const session = await getServerSession(authOption);
  if (!session || !session.user.name)
    return (
      <div>
        <Link
          href='/login'
          className='rounded-md bg-indigo-500 px-3 py-2 text-white hover:bg-gray-800'
        >
          ورود / ثبت نام
        </Link>
      </div>
    );


  return <User name={session.user?.name as string} />;
};

export default UserAvatar;
