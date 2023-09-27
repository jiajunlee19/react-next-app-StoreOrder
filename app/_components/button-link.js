import React from 'react';

function ButtonLink( {buttonTitle, buttonLink} ) {
    return (
      <a href={buttonLink}>
        <button>{buttonTitle}</button>
      </a>
    );
  }

export default ButtonLink;