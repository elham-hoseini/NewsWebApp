import AdminNewsList from '@/components/admin/admin-news-list';
import NewNewsForm from '@/components/admin/new-news-form';
import Container from '@/components/ui/container';
import { authOption } from '@/libs/next-auth';
import { getServerSession } from 'next-auth';

const admin = async () => {
  const session = await getServerSession(authOption);

  if (!session || session?.user.userRole !== 'ADMIN')
    return (
      <div className='flex h-96 flex-col items-center justify-center'>
        دسترسی غیر مجاز
      </div>
    );

  return (
    <div>
      <Container className='mt-8 flex flex-col gap-x-10 md:flex-row'>
        <div className='w-full p-2'>
          <NewNewsForm />
        </div>
        <div className='my-5 block border-b shadow-md md:hidden'></div>
        <div className='w-full p-2 md:h-96 md:overflow-y-auto'>
          <AdminNewsList />
        </div>
      </Container>
    </div>
  );
};

export default admin;
