import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/styles/banner.scss';
import theme from '@/styles/theme';
import Header from '@/components/patterns/Header';
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from '@/common/context/provider';
import Head from 'next/head';
import BottomNav from '@/components/patterns/BottomNav';
import useMobile from '@/common/hooks/useMobile';

export default function App({ Component, pageProps }: AppProps) {
  const isMobile = useMobile();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <Header />
          <Component {...pageProps} />
          {isMobile && <BottomNav />}
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}
