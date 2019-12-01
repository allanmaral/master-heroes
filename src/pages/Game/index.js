import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import { withGameLogic } from './hocs/GameLogic';
import { withHeroesLoader } from './hocs/HeroesLoader';
import { withTimer } from './hocs/Timer';
import compose from '../../util/compose';

import { Container } from './styles';

function Game({
  loading,
  timeRemaining,
  score,
  currentCard,
  handleSelectName,
}) {
  return (
    <Container>
      <h1>Game</h1>
      <h1>Score: {score}</h1>
      <h1>Time Remaining: {timeRemaining}</h1>
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {!loading && (
        <Card hero={currentCard} handleSelectName={handleSelectName} />
      )}
    </Container>
  );
}

Game.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
  timeRemaining: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleSelectName: PropTypes.func.isRequired,
};

export default compose(withTimer, withHeroesLoader, withGameLogic)(Game);
