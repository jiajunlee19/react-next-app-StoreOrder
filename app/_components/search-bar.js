import React from 'react';
import ButtonClick from './button-click';

function SearchBar( {searchPlaceholderText, searchTextValue, onSearchChange, buttonSearchTitle, onSearchClick} ) {
    return (
      <div className="flex-container">
        <input type="text" placeholder={searchPlaceholderText} value={searchTextValue} onChange={onSearchChange} />
        <ButtonClick buttonTitle={buttonSearchTitle} onButtonClick={onSearchClick}/>
      </div>
    );
  }

export default SearchBar;