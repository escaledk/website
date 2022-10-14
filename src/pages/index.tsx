import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Grid } from '../components/grid';
import { Surface } from '../components/surface';
import { Text } from '../components/text';
import { withPageSessionMiddleware } from '../middlewares/PageSessionMiddleware';

const Home: NextPage = () => {
  return (
    <Grid.Wrapper>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid.Item gridColumn="1/13" gridRow="1">
        <Text size="xxLarge">Dashboard</Text>
      </Grid.Item>
      <Grid.Item gridColumn="1/4" gridRow="2/5">
        <Surface shadow="low" padding={2} fill>
          <div></div>
        </Surface>
      </Grid.Item>
      <Grid.Item gridColumn="4/7" gridRow="2/5">
        <Surface shadow="low" padding={2} fill>
          <div></div>
        </Surface>
      </Grid.Item>
      <Grid.Item gridColumn="7/10" gridRow="2/5">
        <Surface shadow="low" padding={2} fill>
          <div></div>
        </Surface>
      </Grid.Item>
      <Grid.Item gridColumn="10/13" gridRow="2/5">
        <Surface shadow="low" padding={2} fill>
          <div></div>
        </Surface>
      </Grid.Item>
    </Grid.Wrapper>
  );
};

export default Home;

const serverSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = req.session;

  return {
    props: {},
  };
};
export const getServerSideProps = withPageSessionMiddleware(serverSideProps);
