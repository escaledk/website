import { Box, Button, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Modal } from '../components/modal';
import { useAuthStore } from '../stores/auth';
import { selectAuthenticate, selectIsAuthenticating } from '../stores/auth/auth.selectors';

const Home: NextPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const authenticate = useAuthStore(selectAuthenticate);
  const isAuthenticating = useAuthStore(selectIsAuthenticating);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    authenticate(credentials.email, credentials.password);
  };

  const { email, password } = credentials;
  return (
    <Box w="100%" h="100%" display="flex" justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <Modal>
          <Box display={'flex'} gap={8} flexDirection={'column'} p={4}>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={email} onChange={handleChange} />
              {!errors.email ? <FormHelperText></FormHelperText> : <FormErrorMessage>{errors.email}</FormErrorMessage>}
            </FormControl>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" value={password} onChange={handleChange} />
              {!!errors.password ? <FormHelperText></FormHelperText> : <FormErrorMessage>Email is required.</FormErrorMessage>}
            </FormControl>
            <Box display={'flex'} justifyContent="center" gap={4}>
              <Button w="100%" bg="gray.500" color={'white'} type="submit" isLoading={isAuthenticating}>
                login
              </Button>
            </Box>
          </Box>
        </Modal>
      </form>
    </Box>
  );
};

export default Home;
