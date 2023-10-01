import React from 'react';
import {experimental_useFormState} from 'react-dom';
import SubmitButton from '../_components/button-submit';

function FormDelete( {deleteState, deleteUrl, primaryKey, primaryID, onDeleteClick} ) {
    return (
        <form action={ async (formData) => {
                await deleteUrl(formData);
                // alert(deleteState.message);
            }
        }>
            <input type="hidden" name={primaryKey} value={primaryID} required readOnly/>
            <SubmitButton buttonClass="button" buttonTitle="delete" onButtonClick={onDeleteClick} />
        </form>
    );
};

export default FormDelete;