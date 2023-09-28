import React from 'react';
import ButtonLink from '../button-link';

function HeaderRight() {
  return (
    <nav className="header-right">
      <ButtonLink buttonTitle={"Manage Member"} buttonLink={"/member"}/>
      <ButtonLink buttonTitle={"Manage Member Level"} buttonLink={"/member_level"}/>
      <ButtonLink buttonTitle={"Manage UOM"} buttonLink={"/uom"}/>
      <ButtonLink buttonTitle={"Manage Product"} buttonLink={"/product"}/>
    </nav>
  );
}
  
export default HeaderRight;
  