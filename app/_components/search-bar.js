import React from 'react';

function SearchBar( {inputType, inputPlaceholder, inputValue, onSearchChange, buttonTitle} ) {
    return (
      <div className="search-bar">
        <input type={inputType} placeholder={inputPlaceholder} value={inputValue} onChange={onSearchChange} />
        <button>{buttonTitle}</button>
      </div>
    );
  }

export default SearchBar;