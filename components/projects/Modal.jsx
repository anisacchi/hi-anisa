import React from 'react';
import { Button } from '@/components';
import { Close } from '@/assets/icons';
import Image from 'next/image';

const Modal = ({ projectImages, setIsModalOpen }) => {
	
  const modalCloseHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='fixed flex flex-col items-center p-4 z-50 top-0 bottom-0 right-0 left-0 overflow-scroll no-scrollbar bg-neutral-500/80'>
      <Button
        type='button'
        intent='primary'
        radius='normal'
        icon='only'
        onClick={modalCloseHandler}
        className='ml-auto'
      >
        <Close className='w-5 h-5 fill-neutral-100 dark:fill-neutral-500' />
      </Button>
      <div>
        {projectImages.map((image, index) => (
          <Image
            key={`image-${index}`}
            src={image}
            width={1366}
            height={768}
            alt='Project Image'
            className='w-full max-w-[800px]'
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default Modal;
