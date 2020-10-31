import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonBox, Button, ImageBox } from './styles';

function Card({ hero, handleSelectName, selectedCard, rightAnwser }) {
  const { image, options } = hero;

  const getButtonColor = (buttonName) => {
    if (selectedCard) {
      if (buttonName === rightAnwser) {
        return '#2fea56';
      }
      if (buttonName === selectedCard) {
        return '#ea2f2f';
      }
    }
    return '#2f6dae';
  };

  return (
    <Container>
      <ImageBox>
        <img src={image} alt="Hero" />
      </ImageBox>
      <ButtonBox>
        {options.map((opt) => (
          <Button
            key={opt}
            type="button"
            color={getButtonColor(opt)}
            onClick={() => {
              handleSelectName(opt);
            }}
            disabled={selectedCard !== ''}
          >
            {opt}
          </Button>
        ))}
      </ButtonBox>
    </Container>
  );
}

Card.propTypes = {
  hero: PropTypes.shape({
    image: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleSelectName: PropTypes.func.isRequired,
  selectedCard: PropTypes.string.isRequired,
  rightAnwser: PropTypes.string.isRequired,
};

export default Card;
