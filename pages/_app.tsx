/* eslint-disable react/jsx-props-no-spreading */
import theme from '@/Theme';
import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // ประกาศตัวแปร รับรหัส LiffId จาก Provide Line dev console
  const liffId = process.env.NEXT_PUBLIC_LIFF_ID || '';

  // ดึงข้อมูลโดย import @line/liff ภายใน client lib แล้วเรียกการใช้ LIFF แล้วเช็ค loggin หรือยัง
  useEffect(() => {
    const fetchData = async () => {
      const liff = (await import('@line/liff')).default;
      try {
        await liff.init({ liffId });
      } catch (error: any) {
        console.error('liff init error', error.message);
      }
      if (!liff.isLoggedIn()) {
        liff.login();
      }
    };

    fetchData();
  }, [liffId]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
