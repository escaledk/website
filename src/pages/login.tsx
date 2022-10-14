import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Styled from '../styles/login.styles';
import { Surface } from '../components/surface';
import { Text } from '../components/text';
import { Page } from '../components/page';

import { withPageRedirectMiddleware } from '../middlewares/PageRedirectMiddleware';
import * as Inputter from '../components/input';
import { Button } from '../components/button';
import { useFetch } from '../hooks/useFetch';

const Home: NextPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [{ isLoading, error, response }, call] = useFetch<any>('/api/auth/login');
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <Page center>
      <Surface>
        <Styled.Form action="/api/auth/login" method="POST">
          <Text size="xLarge">Login</Text>
          <Inputter.InputGroup>
            <Inputter.Label>Email</Inputter.Label>
            <Inputter.InputField name="email" onChange={handleChange} value={credentials.email} />
            {/* <Inputter.Description>this is a description</Inputter.Description> */}
          </Inputter.InputGroup>
          <Inputter.InputGroup>
            <Inputter.Label>Password</Inputter.Label>
            <Inputter.InputField name="password" type="password" onChange={handleChange} value={credentials.password} />
            {/* <Inputter.Description>this is a description</Inputter.Description> */}
          </Inputter.InputGroup>
          <Styled.Buttons>
            <Button isLoading={isLoading} width="full">
              Login
            </Button>
          </Styled.Buttons>
        </Styled.Form>
      </Surface>
    </Page>
  );
};

export default Home;

const serverSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
};

export const getServerSideProps = withPageRedirectMiddleware(serverSideProps);
