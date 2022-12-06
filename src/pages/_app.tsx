import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';

import { store, wrapper } from 'store';
import { theme } from 'theme';
import { MainLayout } from 'layouts';
import createEmotionCache from 'utils/createEmotionCashe';

const clientSideEmotionCache = createEmotionCache();

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache, ...ctx }) => {
    return (
        <ThemeProvider theme={theme}>
            <CacheProvider value={emotionCache}>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </CacheProvider>
        </ThemeProvider>
    );
};

export default wrapper.withRedux(MyApp);