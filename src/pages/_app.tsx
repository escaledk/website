import { ChakraProvider } from '@chakra-ui/react';

import { GlobalStyles, PageWrapper } from '../../styles/global.styles';
import { Hydration } from '../components/hydration';

function MyApp({ Component, pageProps: { session, ...pageProps } }: any) {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <PageWrapper>
        <Hydration>
          <Component {...pageProps} />
        </Hydration>
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
