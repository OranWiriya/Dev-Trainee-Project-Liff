import Profile from '@/components/Profile';
import { Button } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function profile() {
  return (
    <>
      <Profile />
      <div className="text-center mx-auto">
        <Link href="/">
          <Button
            type="button"
            variant="outlined"
            className=" 
          sm:w-52 sm:h-16
          lg:w-64 lg:h-20"
          >
            Back
          </Button>
        </Link>
      </div>
    </>
  );
}

export default profile;
