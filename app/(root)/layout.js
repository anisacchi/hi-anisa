import { Footer, Header } from '@/components';

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='padding md:padding-x md:py-8'>{children}</main>
      <Footer />
    </>
  );
};

export default layout;
