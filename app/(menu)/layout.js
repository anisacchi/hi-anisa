import { Footer, Header } from '@/components';

const layout = ({ children }) => {
  return (
    <div className='md:flex block md:w-screen'>
      <Header />
      <div className='block md:flex md:flex-col md:h-screen md:justify-between md:basis-full'>
        <main className='padding md:basis-full'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
