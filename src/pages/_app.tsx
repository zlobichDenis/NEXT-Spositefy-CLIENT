import { Provider } from 'react-redux';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';

import { store } from 'store';
import { theme } from 'theme';
import { MainLayout } from 'layouts';
import createEmotionCache from 'utils/createEmotionCashe';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  return (
    <Provider store={store} >
      <ThemeProvider theme={theme}>
        <CacheProvider value={emotionCache}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CacheProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default MyApp;