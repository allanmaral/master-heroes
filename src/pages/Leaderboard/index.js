import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Welcome() {
  return (
    <Container>
      <h1>Welcome to the Jungle</h1>
      <Link to="game">Start Game!</Link>
    </Container>
  );
}
