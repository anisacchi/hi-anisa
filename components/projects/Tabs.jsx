import React from 'react';

const Tabs = ({ tabSelected, setTabSelected }) => {
  const menus = ['All', 'Website', 'Design'];

  return (
    <div className='flex flex-row gap-4'>
      {menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setTabSelected(menu)}
          className={`relative pb-[1px] px-1 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:bg-primary-300 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out ${
            tabSelected === menu ? 'before:w-full text-primary-300 font-semibold tracking-wider' : 'before:w-0 text-neutral-300 hover:text-primary-400 dark:hover:text-primary-100'
          }`}
        >
          <span className='text-sm'>{menu}</span>
        </button>
      ))}
    </div>
  );
};

export default Tabs;
