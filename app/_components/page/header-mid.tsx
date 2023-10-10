'use client'

import React from 'react';
import {useState} from 'react';
import SearchBar from '@/app/_components/search-bar';
  
function HeaderMid() {

  // Control state of search bar value
  const [inputValue, setInputValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // Search logic
  };

  return (
    <nav className="header-mid">
      <SearchBar searchPlaceholderText={"Search"} searchTextValue={inputValue} onSearchChange={handleSearchChange} 
        buttonSearchTitle={"Enter"} onSearchClick={handleSearchClick}/>
    </nav>
  );
}
  
export default HeaderMid;
  