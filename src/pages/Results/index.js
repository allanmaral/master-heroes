import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import GameSettings from '../../config/gameSettings';

import { Container } from './styles';

export default function Results() {
  const location = useLocation();
  const { score, correctAnswers, timeRemaining } = location.state;

  return (
    <Container>
      <h1>Results</h1>
      <h2>{Number(score) + Number(timeRemaining)} Points</h2>
      <h2>
        You got {correctAnswers} out of {GameSettings.numberOfCards} heroes
        right.
      </h2>
      <Link to="game">Restart Game!</Link>
    </Container>
  );
}
