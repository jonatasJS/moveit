import React from 'react';

import { Container } from './styles';

const LoadScreen: React.FC = () => {
  return (
    <Container>
      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </Container>
  );
}

export default LoadScreen;
