import React from 'react';

function ButtonClick( {buttonTitle, onButtonClick} ) {
    return (
        <div>
            <button onClick={onButtonClick}>
                {buttonTitle}
            </button>
        </div>
    );
};

export default ButtonClick;