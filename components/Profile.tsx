import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function Profile() {
  const [profile, setProfile] = useState<string | null | any>('');
  const [data, setData] = useState<string | number | any>(null);

  useEffect(() => {
    const profilefetch = async () => {
      const liff = (await import('@line/liff')).default;
      await liff.ready;
      const profileLine = await liff.getProfile();
      setProfile(profileLine);
      const device = liff.getOS();
      setData(device);
    };

    profilefetch();
  }, [profile.userId]);

  return (
      <div className="flex flex-wrap flex-col content-center justify-center items-center">
        <div>
          {profile.pictureUrl && (
            <Image
              src={profile.pictureUrl}
              alt={profile.displayName}
              width={100}
              height={100}
            />
          )}
        </div>
        <div>Line Name: {profile.displayName}</div>
        <div>
          LineID:
          {profile.userId}
        </div>
        <div>Status Message: {profile.statusMessage}</div>
        <div>Device: {data}</div>
      </div>
  );
}

export default Profile;
