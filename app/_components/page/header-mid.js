'use client'

import React from 'react';
import {useState} from 'react';
import SearchBar from '@/app/_components/search-bar';
  
function HeaderMid() {

  // Control state of search bar value
  const [inputValue, setInputValue] = useState('');

  function handleSearchChange(e) {
    setInputValue(e.target.value);
  };

  function handleSearchClick(e) {
    // Search logic
  };

  return (
    <nav className="header-mid">
      <SearchBar searchPlaceholderText={"Search"} searchTextValue={inputValue} onSearchChange={(e) => handleSearchChange(e)} 
        buttonSearchTitle={"Enter"} onSearchClick={(e) => handleSearchClick(e)}/>
    </nav>
  );
}
  
export default HeaderMid;
  