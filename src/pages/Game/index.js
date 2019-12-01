import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

import { withGameLogic } from './hocs/GameLogic';
import { withHeroesLoader } from './hocs/HeroesLoader';
import { withTimer } from './hocs/Timer';
import compose from '../../util/compose';

import { Container, LoadingScreen } from './styles';

function Game({
  loading,
  timeRemaining,
  score,
  currentCard,
  handleSelectName,
  cardIndex,
  totalCardNumber,
}) {
  return (
    <>
      <Navbar
        title="Heroes Masters"
        inGame
        cardIndex={cardIndex}
        totalCardNumber={totalCardNumber}
        score={score}
        timeRemaining={timeRemaining}
      />
      <Container>
        {loading && (
          <LoadingScreen>
            <h1>Loading...</h1>
          </LoadingScreen>
        )}
        {!loading && (
          <Card hero={currentCard} handleSelectName={handleSelectName} />
        )}
      </Container>
    </>
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
  cardIndex: PropTypes.number.isRequired,
  totalCardNumber: PropTypes.number.isRequired,
};

export default compose(withTimer, withHeroesLoader, withGameLogic)(Game);
