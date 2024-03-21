import '../styles/globals.css';
import type { AppProps } from 'next/app';
import DashboardLayout from '@components/common/DashboardLayout/DashboardLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import store from '@store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import Router from 'next/router';
import { getAccessToken } from '@constants/constants';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const accessToken = getAccessToken;
    if (accessToken && accessToken?.length > 0) {
      if (Router.pathname === '/login') {
        //Router.push("/");
      }
    } else {
      //Router.push("/login");
    }
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
