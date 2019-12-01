import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withData } from './hocs/Data';
import { Container } from './styles';
import compose from '../../util/compose';

function Results({
  totalScore,
  timeRemaining,
  correctAnswers,
  maximumNumberOfCards,
}) {
  return (
    <Container>
      <h1>Results</h1>
      <h2>{totalScore} Points</h2>
      <h2>
        You got {correctAnswers} out of {maximumNumberOfCards} heroes right.
      </h2>
      <h2>With {timeRemaining} seconds remaining.</h2>
      <Link to="game">Restart Game!</Link>
    </Container>
  );
}

Results.propTypes = {
  totalScore: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  maximumNumberOfCards: PropTypes.number.isRequired,
};

export default compose(withData)(Results);
