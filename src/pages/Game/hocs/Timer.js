import React, { useEffect, useState } from 'react';

import GameSettings from '../../../config/gameSettings';

export const withTimer = Component => {
  const WithTimer = props => {
    const [timeRemaining, setTimeRemaining] = useState(GameSettings.gameTime);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }, [timeRemaining]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} timeRemaining={timeRemaining} />;
  };

  return WithTimer;
};

export default withTimer;
