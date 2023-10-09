import React from 'react';
import SubmitButton from '@/app/_components/button-submit';

type FormDeleteProps = {
    deleteUrl: (formData: FormData) => Promise<void>, 
    primaryKey: string, 
    primaryID: string, 
    onDeleteClick: React.MouseEventHandler,
};

function FormDelete( { deleteUrl, primaryKey, primaryID, onDeleteClick}: FormDeleteProps ): React.JSX.Element {
    return (
        <form action={ async (formData: FormData): Promise<void> => {
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