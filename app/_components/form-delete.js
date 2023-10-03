import React from 'react';
import SubmitButton from '@/app/_components/button-submit';

function FormDelete( {deleteState, deleteUrl, primaryKey, primaryID, onDeleteClick} ) {
    return (
        <form action={ async (formData) => {
                await deleteUrl(formData);
                // alert(deleteState.message);
            }
        }>
            <input type="hidden" name={primaryKey} value={primaryID} required readOnly/>
            <SubmitButton buttonClass="button" buttonTitle="delete" onButtonClick={onDeleteClick} submitingButtonTitle="deleting" />
        </form>
    );
};

export default FormDelete;