import React from 'react';
import { FaPlay } from 'react-icons/fa';

import Navbar from '../../components/Navbar';
import { Container, LinkButton } from './styles';

import GameSettings from '../../config/gameSettings';

export default function Welcome() {
  return (
    <>
      <Navbar title="Master Heroes" />
      <Container>
        <h1>Welcome to Master Heroes</h1>
        <p>
          This is a simple guess game, for each image you have three name
          options, select the name of the hero in the image and score.
        </p>
        <p>
          You have {GameSettings.gameTime} seconds to guess the name of{' '}
          {GameSettings.numberOfCards} heroes, after answering all the heros,
          the remaining time will be converted in points.
        </p>
        <p>Can you guess all the heroes?</p>
        <LinkButton to="game">
          <FaPlay size={20} />
          Start Game!
        </LinkButton>
      </Container>
    </>
  );
}
