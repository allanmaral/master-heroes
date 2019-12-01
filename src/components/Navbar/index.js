import React from 'react';
import PropTypes from 'prop-types';
import { FaMedal, FaClock } from 'react-icons/fa';

import { Container, CurrentCard, LeftScore, RightScore, Title } from './styles';

function Navbar({
  title,
  inGame,
  score,
  timeRemaining,
  cardIndex,
  totalCardNumber,
}) {
  return (
    <Container>
      <ul>
        <li>
          {inGame && (
            <CurrentCard>
              {cardIndex}/{totalCardNumber}
            </CurrentCard>
          )}
        </li>
        <li>
          <Title>{title}</Title>
        </li>
        <li>
          {inGame && (
            <>
              <LeftScore>
                <FaMedal />
                <span>{score}</span>
              </LeftScore>
              <RightScore>
                <FaClock />
                <span>{timeRemaining}</span>
              </RightScore>
            </>
          )}
        </li>
      </ul>
    </Container>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  inGame: PropTypes.bool,
  score: PropTypes.number,
  cardIndex: PropTypes.number,
  totalCardNumber: PropTypes.number,
  timeRemaining: PropTypes.number,
};

Navbar.defaultProps = {
  inGame: false,
  score: 0,
  timeRemaining: 0,
  cardIndex: 1,
  totalCardNumber: 5,
};

export default Navbar;
