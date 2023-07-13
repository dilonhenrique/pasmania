import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import '@/styles/banner.scss';
import theme from '@/styles/theme';
import Header from '@/components/patterns/Header';
import { ThemeProvider } from '@mui/material/styles';
import ContextProvider from '@/common/context/provider';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Header />
        <Component {...pageProps} />
      </ContextProvider>
    </ThemeProvider>
  );
}

// export default wrapper.withRedux(App);
export default App;
