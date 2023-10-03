import React from 'react';
import ButtonLink from '@/app/_components/button-link';

function HeaderLeft() {
    return (
      <nav className="header-left">
        <ButtonLink buttonTitle={"Manage Order"} buttonLink={"/getMember"}/>
      </nav>
    );
  }
  
export default HeaderLeft;
  