import React, { ReactNode } from 'react';
import Navbar from '../Navbar';
import TitleSlider from './TitleSlider';

interface PageProps {
  children?: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className='bg-[#171717]'>
      <TitleSlider />
      <Navbar />
      {children}
    </div>
  );
}
