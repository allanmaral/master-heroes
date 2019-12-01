import React from 'react';
import { useLocation } from 'react-router';

import GameSettings from '../../../config/gameSettings';

export const withData = Component => {
  const WithData = props => {
    const location = useLocation();
    const { score, correctAnswers, timeRemaining } = location.state;
    const totalScore = Number(score) + Number(timeRemaining);

    return (
      <Component
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        totalScore={totalScore}
        timeRemaining={timeRemaining}
        correctAnswers={correctAnswers}
        maximumNumberOfCards={GameSettings.numberOfCards}
      />
    );
  };
  return WithData;
};

export default {};
