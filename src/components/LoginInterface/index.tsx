import React from 'react';
import { signIn } from 'next-auth/client';

import { Container } from './styles';

const LoginInterface: React.FC = () => {
  return (
    <Container>
      <img src="./logo-full.svg" alt=""/>
      <h1>Você não está logado!</h1>
      <p>Clique no botão abaixo para fazer o login.</p>
      <button onClick={(): Promise<void> => signIn('auth0')}>Logar</button>
    </Container>
  );
};

export default LoginInterface;
