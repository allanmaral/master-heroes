import React from 'react';
import PropTypes from 'prop-types';
import { FaMedal, FaClock, FaUndo } from 'react-icons/fa';

import Navbar from '../../components/Navbar';

import { withData } from './hocs/Data';
import { Container, ScoreContainer, Score, LinkButton } from './styles';
import compose from '../../util/compose';

function Results({
  totalScore,
  timeRemaining,
  correctAnswers,
  maximumNumberOfCards,
}) {
  return (
    <>
      <Navbar title="Results" />
      <Container>
        <h1>Congratulations!</h1>
        <h2>
          You got {correctAnswers} out of {maximumNumberOfCards} heroes right.
        </h2>
        <ScoreContainer>
          <Score>
            <FaMedal size={32} />
            <div>
              <span>{totalScore}</span>
              <strong>Points</strong>
            </div>
          </Score>
          <Score>
            <FaClock size={32} />
            <div>
              <span>
                {timeRemaining} <strong>s</strong>
              </span>
              <strong>Remaining</strong>
            </div>
          </Score>
        </ScoreContainer>
        <LinkButton to="game">
          <FaUndo size={20} />
          Restart Game!
        </LinkButton>
      </Container>
    </>
  );
}

Results.propTypes = {
  totalScore: PropTypes.number.isRequired,
  timeRemaining: PropTypes.number.isRequired,
  correctAnswers: PropTypes.number.isRequired,
  maximumNumberOfCards: PropTypes.number.isRequired,
};

export default compose(withData)(Results);
