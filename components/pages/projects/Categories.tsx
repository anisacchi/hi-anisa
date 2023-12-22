import React from 'react';

type CategoriesProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  const categories = ['All', 'Website', 'Native', 'Design'];

  const selectCategoryHandler = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className='mt-4 w-full border-b border-b-primary-300/20'>
      <div className='flex justify-between'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => selectCategoryHandler(category)}
            className={`relative pb-3 w-full flex justify-center items-center before:absolute before:bottom-0 before:h-1 before:bg-primary-400 before:dark:bg-primary-200 before:rounded-lg before:transition-all before:duration-300 before:ease-in-out before:origin-left ${
              selectedCategory === category ? 'before:w-full' : 'before:w-0'
            } group`}
          >
            <span
              className={`text-sm ${
                selectedCategory === category
                  ? 'text-primary-400 dark:text-primary-200'
                  : 'text-neutral-300 group-hover:text-primary-300'
              }`}
            >
              {category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
