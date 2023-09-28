'use client'

import React from 'react';
import {useState} from 'react';
import SearchBar from '../search-bar';
  
function HeaderMid() {

  // Control state of search bar value
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
  
export default HeaderMid;
  