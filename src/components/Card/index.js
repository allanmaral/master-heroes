import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonBox, Button, ImageBox } from './styles';

function Card({ hero, handleSelectName }) {
  const { image, options } = hero;
  return (
    <Container>
      <ImageBox>
        <img src={image} alt="Hero" />
      </ImageBox>
      <ButtonBox>
        {options.map(opt => (
          <Button
            key={opt}
            type="button"
            onClick={() => {
              handleSelectName(opt);
            }}
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
    options: PropTypes.array.isRequired,
  }).isRequired,
  handleSelectName: PropTypes.func.isRequired,
};

export default Card;
