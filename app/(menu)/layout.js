import { Footer, Header } from '@/components';

const layout = ({ children }) => {
  return (
    <div className='flex flex-col md:flex-row md:w-screen h-screen min-h-screen'>
      <Header />
      <div className='flex flex-col md:h-screen md:justify-between w-full overflow-x-auto'>
        <main className='padding w-full basis-full'>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
