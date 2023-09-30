import React from 'react';
import {experimental_useFormState} from 'react-dom';
import SubmitButton from '../_components/button-submit';

function FormDelete( {deleteUrl, primaryKey, primaryID, onDeleteClick} ) {
    return (
        <form action={deleteUrl}>
            <input type="hidden" id={primaryKey} name={primaryKey} value={primaryID} required readOnly/>
            <SubmitButton buttonClass="button" buttonTitle="delete" onButtonClick={onDeleteClick}/>
            {/* <input type="submit" value="delete" onClick={onDeleteClick}/> */}
        </form>
    );
};

export default FormDelete;