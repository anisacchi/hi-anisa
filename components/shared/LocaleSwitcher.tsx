'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/navigation';
import { locales } from '@/constants/locales';
import { Button } from '@/components/ui';
import { CaretDown } from '@/assets/icons';

type LocaleSwitcherProps = {
  render: 'sideNavbar' | 'others';
};

const LocaleSwitcher = ({ render }: LocaleSwitcherProps) => {
  const localeId = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const [localeSelected, setLocaleSelected] = useState<typeof locales>(
    locales.filter((locale) => locale.id === localeId)
  );

  const [openLocaleOptions, setOpenLocaleOptions] = useState<boolean>(false);

  const openLocaleOptionsHandler = () => {
    setOpenLocaleOptions(
      (openLocaleOptionsHandler) => !openLocaleOptionsHandler
    );
  };

  const changeLocaleHandler = (id: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: id });
    });
  };

  const selectedLocale = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetId = event.currentTarget.value;
    setLocaleSelected(locales.filter((locale) => locale.id === targetId));
    changeLocaleHandler(targetId);
    openLocaleOptionsHandler();
  };

  return (
    <div className='relative'>
      <Button
        variant='secondary'
        icon={render === 'others' ? 'left' : 'only'}
        radius={render === 'others' ? 'normal' : 'full'}
        onClick={openLocaleOptionsHandler}
      >
        <Image
          src={localeSelected[0].flag}
          width={24}
          height={24}
          alt={`Flag of ${localeSelected[0].name}`}
          className={render === 'others' ? 'rounded-[4px]' : 'rounded-full'}
        />
        {render === 'others' && (
          <CaretDown
            width={16}
            height={16}
            className={`${
              openLocaleOptions ? `-scale-y-100` : `scale-y-100`
            } fill-primary-400 dark:fill-primary-300 transition-all duration-300 ease-in-out`}
          />
        )}
      </Button>
      {openLocaleOptions && (
        <div
          className={`absolute w-full h-4 ${
            render === 'others' ? 'top-14' : '-top-14'
          }`}
        >
          {locales.map((locale) => {
            if (locale.id !== localeSelected[0].id) {
              return (
                <Button
                  key={locale.id}
                  value={locale.id}
                  variant='secondary'
                  icon={render === 'others' ? 'left' : 'only'}
                  radius={render === 'others' ? 'normal' : 'full'}
                  onClick={selectedLocale}
                >
                  <Image
                    src={locale.flag}
                    width={24}
                    height={24}
                    alt={`Flag of ${locale.name}`}
                    className={
                      render === 'others' ? 'rounded-[4px]' : 'rounded-full'
                    }
                  />
                  {render === 'others' && <span>{locale.name}</span>}
                </Button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;
