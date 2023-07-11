import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function BannerName() {
  const [profile, setProfile] = useState<string | null | any>('');

  useEffect(() => {
    const profilefetch = async () => {
      const liff = (await import('@line/liff')).default;
      await liff.ready;
      const profileLine = await liff.getProfile();
      setProfile(profileLine);
    };

    profilefetch();
  }, [profile.userId]);

  return (
      <Grid
        container
        sx={{
          height: 240,
        }}
      >
        <Grid item xs={8}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Typography
              className="text-center mx-auto text-xl font-bold mb-6 text-[#1f1f1f]
            sm:mb-12 sm:p-1 sm:px-5 sm:text-3xl"
            >
              LIFF Project Shopping app
            </Typography>
            <Typography
              className="text-[#8e8e93] mx-auto text-xs text-center mb-6
            sm:p-1 sm:px-5 sm:mb-10 sm:text-sm"
            >
              userID: {profile.userId}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <div>
            {profile.pictureUrl && (
              <Image
                src={profile.pictureUrl}
                alt={profile.displayName}
                width={140}
                height={140}
                className="mx-auto mb-5"
              />
            )}
          </div>
          <Typography
            className="text-center text-sm mx-auto text-[#1f1f1f]
          sm:p-1 sm:px-5 sm:text-lg"
          >
            <span className="font-normal">Line Name:</span>
            {profile.displayName}
          </Typography>
        </Grid>
      </Grid>
  );
}

export default BannerName;
