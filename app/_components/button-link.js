import React from 'react';
import Link from 'next/link';

function ButtonLink( {buttonTitle, buttonLink} ) {
    return (
      <Link href={buttonLink}>
        <button>{buttonTitle}</button>
      </Link>
    );
  }

export default ButtonLink;