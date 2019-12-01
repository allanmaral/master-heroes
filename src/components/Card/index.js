import React from 'react';

import PropTypes from 'prop-types';

function Card({ hero, handleSelectName }) {
  const { image, options } = hero;
  return (
    <div>
      <img src={image} alt="Hero" />
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => {
            handleSelectName(opt);
          }}
        >
          {opt}
        </button>
      ))}
    </div>
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
