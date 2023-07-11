import React from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Button } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-w-full text-center p-24 ${inter.className}`}>
      <header
        className="font-medium text-5xl 
        sm:text-7xl sm:m-7
        lg:text-9xl lg:m-10"
      >
        NextJS & LIFF project
      </header>
      <div
        className="my-10 flex flex-col justify-center items-center 
      sm:my-12 
      lg:my-20 "
      >
        <Link href="/profile">
          <Button
            variant="outlined"
            className="
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20"
          >
            Profile
          </Button>
        </Link>
        <Link href="/shopping">
          <Button
            variant="outlined"
            className="
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20"
          >
            Let Shopping
          </Button>
        </Link>
      </div>
    </main>
  );
}
