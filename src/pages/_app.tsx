import { ChakraProvider } from '@chakra-ui/react';
import { GlobalStyles, PageWrapper } from '../../styles/global.styles';
import { useAuthStore } from '../stores/auth';
import { selectIsAuthenticated } from '../stores/auth/auth.selectors';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);

  return (
    <ChakraProvider>
      <GlobalStyles />
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
