import React from 'react';
import Link from 'next/link';
import { Url } from 'url';

type ButtonLinkProps = {
  buttonTitle: string,
  buttonLink: Url,
};

function ButtonLink( {buttonTitle, buttonLink}: ButtonLinkProps ): React.JSX.Element {
    return (
      <Link href={buttonLink}>
        <button>{buttonTitle}</button>
      </Link>
    );
  }

export default ButtonLink;