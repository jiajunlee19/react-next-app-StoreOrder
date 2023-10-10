import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  buttonTitle: string,
  buttonLink: string,
};

function ButtonLink( {buttonTitle, buttonLink}: ButtonLinkProps ): React.JSX.Element {
    return (
      <Link href={buttonLink}>
        <button>{buttonTitle}</button>
      </Link>
    );
  }

export default ButtonLink;