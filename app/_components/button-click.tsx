import React from 'react';

type ButtonClickProps = {
    buttonTitle: string,
    onButtonClick: React.MouseEventHandler,
};

function ButtonClick( {buttonTitle, onButtonClick}: ButtonClickProps ): React.JSX.Element {
    return (
        <button onClick={onButtonClick}>
            {buttonTitle}
        </button>
    );
};

export default ButtonClick;