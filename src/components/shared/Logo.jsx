import React from 'react';

export default function Logo({ size = 'default' }) {
  const imgSizes = { small: 'h-8', default: 'h-10', large: 'h-14' };
  return (
    <img
      src="https://media.base44.com/images/public/69b1b9537ee76e31a86fda3a/8a7da44ac_GenaraLabsLogo-modified.png"
      alt="Genara Labs"
      className={`${imgSizes[size]} w-auto object-contain rounded-full`}
    />
  );
}