import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

import GameSettings from '../../../config/gameSettings';

export const withGameLogic = (Component) => {
  const WithGameLogic = (props) => {
    const { timeRemaining, heroesList } = props;
    const [currentCard, setCurrentCard] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [selectedCard, setSelectedCard] = useState('');
    const history = useHistory();

    useEffect(() => {
      if (currentCard === GameSettings.numberOfCards || timeRemaining <= 0) {
        history.push('/results', { score, correctAnswers, timeRemaining });
      }
    }, [currentCard, timeRemaining, score, correctAnswers, history]);

    const handleSelectName = (selectedName) => {
      if (selectedName === heroesList[currentCard].name) {
        setScore(score + 20);
        setCorrectAnswers(correctAnswers + 1);
      }
      setSelectedCard(selectedName);
      setTimeout(() => {
        setCurrentCard(currentCard + 1);
        setSelectedCard('');
      }, 1500);
    };

    return (
      heroesList.length > 0 &&
      currentCard < GameSettings.numberOfCards && (
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
          handleSelectName={handleSelectName}
          currentCard={heroesList[currentCard]}
          cardIndex={currentCard + 1}
          totalCardNumber={GameSettings.numberOfCards}
          selectedCard={selectedCard}
          score={score}
        />
      )
    );
  };

  WithGameLogic.propTypes = {
    heroesList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        options: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ).isRequired,
    timeRemaining: PropTypes.number.isRequired,
  };

  return WithGameLogic;
};

export default withGameLogic;
