'use client';

import React from 'react';
import TypeWriter from 'typewriter-effect';

type TypeWriterEffectProps = {
  strings: string[];
  wrapperClassName: string;
};

const TypeWriterEffect = ({
  strings,
  wrapperClassName,
}: TypeWriterEffectProps) => {
  return (
    <TypeWriter
      options={{
        strings,
        wrapperClassName,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriterEffect;
