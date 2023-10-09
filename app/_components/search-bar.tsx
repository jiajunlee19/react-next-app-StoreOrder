import React from 'react';
import ButtonClick from '@/app/_components/button-click';

type SearchBarProps = {
  searchPlaceholderText: string, 
  searchTextValue: string, 
  onSearchChange: React.ChangeEventHandler, 
  buttonSearchTitle: string, 
  onSearchClick: React.MouseEventHandler,
};

function SearchBar( 
      {searchPlaceholderText, searchTextValue, onSearchChange, buttonSearchTitle, onSearchClick}: SearchBarProps 
    ): React.JSX.Element {

    return (
      <div className="flex-container">
        <input type="text" placeholder={searchPlaceholderText} value={searchTextValue} onChange={onSearchChange} />
        <ButtonClick buttonTitle={buttonSearchTitle} onButtonClick={onSearchClick}/>
      </div>
    );
  }

export default SearchBar;