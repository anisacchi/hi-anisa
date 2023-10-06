'use client';

import React from 'react';

import Typewriter from 'typewriter-effect';

const TypeWriterEffect = ({ strings, style }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        wrapperClassName: style,
      }}
    />
  );
};

export default TypeWriterEffect;
