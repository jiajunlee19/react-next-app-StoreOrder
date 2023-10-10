import React from 'react';
import ButtonLink from '@/app/_components/button-link';

function HeaderRight() {
  return (
    <nav className="header-right">
      <ButtonLink buttonTitle={"Manage Member"} buttonLink={"/member"}/>
      <ButtonLink buttonTitle={"Manage Member Level"} buttonLink={"/memberLevel"}/>
      <ButtonLink buttonTitle={"Manage UOM"} buttonLink={"/uom"}/>
      <ButtonLink buttonTitle={"Manage Product"} buttonLink={"/product"}/>
    </nav>
  );
}
  
export default HeaderRight;
  