import React from 'react';
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

function SubmitButton( {buttonClass, buttonTitle, onButtonClick} ) {

    // useFormStatus gives a boolean, use this to tell if the button should be aria-disabled or not
    const { pending } = useFormStatus();

    return (
        <button className={buttonClass} type="submit" aria-disabled={pending} onClick={onButtonClick}>
            {buttonTitle}
        </button>
    );
};

export default SubmitButton;