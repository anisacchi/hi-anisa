'use client';

import { CaretLeft, CaretRight } from '@/assets/icons';
import { Button } from '@/components/ui';
import React, { useEffect, useState } from 'react';

type PaginationProps = {
  displayedProjectsLength: number;
  projectPerPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  displayedProjectsLength,
  projectPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    setTotalPage(Math.ceil(displayedProjectsLength / projectPerPage));
  }, [displayedProjectsLength, projectPerPage]);

  return (
    <div className='mt-4 flex gap-2 justify-center items-center'>
      <Button
        type='button'
        variant={currentPage === 1 ? 'disabled' : 'secondary'}
        icon='only'
        radius='normal'
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <CaretLeft
          className={
            currentPage === 1
              ? 'fill-neutral-300'
              : 'fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200'
          }
        />
      </Button>

      {[...Array(totalPage).keys()].map((page) => (
        <Button
          key={page}
          type='button'
          variant={page + 1 === currentPage ? 'primary' : 'secondary'}
          icon='only'
          radius='normal'
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
        </Button>
      ))}

      <Button
        type='button'
        variant={currentPage === totalPage ? 'disabled' : 'secondary'}
        icon='only'
        radius='normal'
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <CaretRight
          className={
            currentPage === totalPage
              ? 'fill-neutral-300'
              : 'fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200'
          }
        />
      </Button>
    </div>
  );
};

export default Pagination;
