import React from 'react';
import SubmitButton from '@/app/_components/button-submit';
import { toast } from 'react-hot-toast'

type FormDeleteProps = {
    formSubmitAction: (formData: FormData) => Promise<{success?: string, error?: string}>,
    primaryKey: string, 
    primaryID: string, 
    onDeleteClick: React.MouseEventHandler,
};

function FormDelete( { formSubmitAction, primaryKey, primaryID, onDeleteClick}: FormDeleteProps ): React.JSX.Element {
    return (
        <form action={ async (formData) => {
                const result = await formSubmitAction(formData);
                if (result?.error) {
                    toast.error(result.error);
                }
                else if (result?.success) {
                    toast.success(result.success);
                }
            }
        }>
            <input type="hidden" name={primaryKey} value={primaryID} required readOnly formNoValidate/>
            <SubmitButton buttonClass="button" buttonTitle="delete" onButtonClick={onDeleteClick} submitingButtonTitle="deleting" />
        </form>
    );
};

export default FormDelete;