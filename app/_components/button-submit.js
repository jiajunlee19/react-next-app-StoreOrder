import React from 'react';
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

function SubmitButton( {buttonTitle, onButtonClick} ) {

    // useFormStatus gives a boolean, to tell if the button should be aria-disabled or not
    const {pending} = useFormStatus();

    return (
        <button type="submit" aria-disabled={pending} onClick={onButtonClick}>
            {buttonTitle}
        </button>
    );
};

export default SubmitButton;