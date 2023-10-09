import React from 'react';
import {experimental_useFormStatus as useFormStatus} from 'react-dom'

type SubmitButtonProps = {
    buttonClass: string,
    buttonTitle: string,
    onButtonClick: React.MouseEventHandler,
    submitingButtonTitle: string,
};

function SubmitButton( {buttonClass, buttonTitle, onButtonClick, submitingButtonTitle}: SubmitButtonProps ): React.JSX.Element {

    // useFormStatus gives a pending boolean, use this to tell if the button should be disabled or not
    const { pending } = useFormStatus();

    return (
        <button className={buttonClass} type="submit" disabled={pending} onClick={onButtonClick}>
            {pending ? submitingButtonTitle : buttonTitle}
        </button>
    );
};

export default SubmitButton;