import React from 'react';

function ButtonClick( {buttonTitle, onButtonClick} ) {
    return (
        <button onClick={onButtonClick}>
            {buttonTitle}
        </button>
    );
};

export default ButtonClick;