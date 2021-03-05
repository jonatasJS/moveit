import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ThemeProvider } from '../contexts/ThemeContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </ThemeProvider>
);

export default MyApp;
