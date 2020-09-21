import React from 'react';

import '../styles/components/Card.styl';

const Card = ({ image, title, type, description, id }) => (
  <div className={`Card Card-${id}`}>
    <div className="Card__img">
      <img src={image} alt={title} />
      <div>
        <p>{type}</p>
      </div>
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

export default Card;
