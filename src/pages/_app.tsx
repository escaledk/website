import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, Container, Content } from '../styles/global.styles';
import 'animate.css';
import { theme } from '../config/theme';
import { IMenubarItem } from '../components/menubar/menubar.types';
import { Menubar } from '../components/menubar';
import { withIronSessionSsr } from 'iron-session/next/dist';
import { getIronSession } from 'iron-session';
import App, { AppContext } from 'next/app';
import { sessionConfig } from '../config/session';
import { useRouter } from 'next/router';

// TODO: add the items to the database
const items: IMenubarItem[] = [
  {
    link: '/',
    text: 'Dashboard',
  },
  {
    link: '/customers',
    text: 'Customers',
  },
  {
    link: '/departments',
    text: 'Departments',
  },
];

function MyApp({ Component, pageProps: { session, ...pageProps }, user }: any) {
  const isAuthenticated = !!user;
  const router = useRouter();

  const showMenu = isAuthenticated && router.route !== '/404';
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NextNProgress color={theme.colors.primary} height={4} />
      <Container>
        {showMenu && <Menubar items={items} />}
        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  if (appContext.ctx.req && appContext.ctx.res) {
    const { user } = await getIronSession(appContext.ctx.req, appContext.ctx.res, sessionConfig);

    return {
      ...appProps,
      user,
    };
  }

  // here as server-side's already given a valid user, client side should handle the case when navigating
  return appProps;
};

export default MyApp;
