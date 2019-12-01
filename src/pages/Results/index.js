import React from 'react';
import { Link } from 'react-router-dom';

import GameSettings from '../../config/gameSettings';

import { Container } from './styles';

export default function Welcome({ location }) {
  const { score, correctAnswers } = location.state;

  return (
    <Container>
      <h1>Results</h1>
      <h2>{score} Points</h2>
      <h2>
        {correctAnswers} of {GameSettings.numberOfCards} correct answers
      </h2>
      <Link to="game">Start Game!</Link>
    </Container>
  );
}
