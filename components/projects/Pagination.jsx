'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components';
import { CaretLeft, CaretRight } from '@/assets/icons';

const Pagination = ({
  displayedProjectsLength,
  projectPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    setTotalPage(Math.ceil(displayedProjectsLength / projectPerPage));
  }, [displayedProjectsLength, projectPerPage]);

  return (
    <div className='mt-4 flex gap-2 justify-center items-center'>
      <Button
        type='button'
        intent={currentPage === 1 ? 'disabled' : 'secondary'}
        icon='only'
        radius='normal'
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        <CaretLeft
          className={
            currentPage === 1 ? 'fill-neutral-300' : 'fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200'
          }
        />
      </Button>

      {[...Array(totalPage).keys()].map((page) => (
        <Button
          key={page}
          type='button'
          intent={page + 1 === currentPage ? 'primary' : 'secondary'}
          icon='only'
          radius='normal'
          onClick={() => setCurrentPage(page + 1)}
        >
          {page + 1}
        </Button>
      ))}

      <Button
        type='button'
        intent={currentPage === totalPage ? 'disabled' : 'secondary'}
        icon='only'
        radius='normal'
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <CaretRight
          className={
            currentPage === totalPage ? 'fill-neutral-300' : 'fill-primary-400 group-hover:fill-primary-500 dark:fill-primary-300 dark:group-hover:fill-primary-200'
          }
        />
      </Button>
    </div>
  );
};

export default Pagination;
