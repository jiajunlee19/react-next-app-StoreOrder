'use client'

import React from 'react';
import {useState} from 'react';
import ButtonLink from '../button-link';
import SearchBar from '../search-bar';

function HeaderLeft() {
    return (
      <nav className="header-left">
        <ButtonLink buttonTitle={"Manage Order"} buttonLink={"/index.html"}/>
      </nav>
    );
  }
  
  function HeaderMid() {
  
    const [inputValue, setInputValue] = useState('');
  
    function handleSearchChange(e) {
      setInputValue(e.target.value);
    };
  
    return (
      <nav className="header-mid">
        <SearchBar inputType={"text"} inputPlaceholder={"Search"} inputValue={inputValue} onSearchChange={(e) => handleSearchChange(e)} buttonTitle={"Enter"}/>
      </nav>
    );
  }
  
  function HeaderRight() {
    return (
      <nav className="header-right">
        <ButtonLink buttonTitle={"Manage Member"} buttonLink={"/member.html"}/>
        <ButtonLink buttonTitle={"Manage Member Level"} buttonLink={"/member_level.html"}/>
        <ButtonLink buttonTitle={"Manage UOM"} buttonLink={"/uom.html"}/>
        <ButtonLink buttonTitle={"Manage Product"} buttonLink={"/product.html"}/>
      </nav>
    );
  }
  
  function Header() {
    return (
      <header className="header">
        <HeaderLeft />
        <HeaderMid />
        <HeaderRight />
      </header>
    );
  }
  
  export default Header;
  