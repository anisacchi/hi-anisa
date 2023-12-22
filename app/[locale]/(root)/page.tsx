import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Transition } from '@/components/shared';
import { Form, Greeting, NextButton } from '@/components/pages/home';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <Transition />

      <div className='w-full flex flex-col lg:flex-row justify-center lg:gap-5'>
        <section className='w-full lg:basis-1/2 flex flex-col justify-center items-center'>
          {/* Mobile View */}
          <div className='lg:hidden'>
            <Greeting />
          </div>
          {/* End Mobile View */}

          <Image
            src='/assets/images/hero1.webp'
            alt='Hero'
            width={1500}
            height={1500}
            className='w-full max-w-sm'
            priority
          />
        </section>

        <section className='w-full flex flex-row justify-center lg:basis-1/2'>
          <div className='w-full lg:w-auto'>
            <div className='hidden lg:block'>
              <Greeting />
            </div>

            <div className='w-full flex flex-col justify-center items-center lg:items-start'>
              {/* Large View */}
              <div className='w-full max-w-xs hidden lg:block'>
                <Form />
              </div>
              {/* End Large View */}

              <div className='w-full max-w-xs'>
                <NextButton value={t('nextButtonText')} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
