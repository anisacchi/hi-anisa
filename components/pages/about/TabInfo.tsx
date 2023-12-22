import React from 'react';
import { aboutInfo } from '@/constants';

type TabInfoProps = {
  selectedTab: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabInfo = ({ selectedTab, setSelectedTab }: TabInfoProps) => {
  return (
    <div className='mt-4 w-full border-b border-b-primary-300/20'>
      <div className='flex justify-between'>
        {aboutInfo.map((info) => (
          <button
            key={info.id}
            type='button'
            onClick={() => setSelectedTab(info.id)}
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedTab === info.id ? 'before:w-full' : 'before:w-0'
            } group`}
          >
            <info.icon
              height={24}
              width={24}
              className={`${
                selectedTab === info.id
                  ? 'fill-primary-400 dark:fill-primary-200'
                  : 'fill-neutral-300 group-hover:fill-primary-300'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabInfo;
