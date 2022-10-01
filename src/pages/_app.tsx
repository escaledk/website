import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../styles/global.styles';
import { Hydration } from '../components/hydration';
import { PageWrapper } from '../components/pageWrapper';
import { theme } from '../config/theme';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NextNProgress color={theme.colors.primary} height={4} />
      <Hydration>
        <PageWrapper>
          <Component {...pageProps} />
        </PageWrapper>
      </Hydration>
    </ThemeProvider>
  );
}

export default MyApp;
