import React from 'react';
import Image from 'next/image';
import { ProjectType } from './ProjectCards';
import { Button } from '@/components/ui';
import { Close } from '@/assets/icons';

type ModalProps = {
  project: ProjectType;
  modalHandler: () => void;
};

const Modal = ({ project, modalHandler }: ModalProps) => {
  return (
    <>
      <Button
        type='button'
        variant='primary'
        radius='normal'
        icon='only'
        onClick={modalHandler}
        className='ml-auto'
      >
        <Close
          width={20}
          height={20}
          className='fill-neutral-100 dark:fill-neutral-500'
        />
      </Button>
      <div>
        {project.images.map((image, index) => (
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
    </>
  );
};

export default Modal;
