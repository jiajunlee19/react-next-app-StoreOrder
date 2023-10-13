import React from 'react';
import ButtonClick from '@/app/_components/button-click';
import Form from '@/app/_components/form';
import { createNestedObject, accessNestedObject } from '@/app/_actions/utils';

type ShowFormProps = {
    isShowForm: string | null, 
    formTitle: string, 
    rowData: {
        [key: string]: any,
    }, 
    inputDictInsert: {
        [key: string]: string,
    }, 
    inputDictUpdate: {
        [key: string]: string,
    }, 
    onSetIsShowForm: React.Dispatch<React.SetStateAction<string | null>>,
    onSetRowData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>, 
    insertAction: (formData: FormData) => Promise<{success?: string, error?: string}>, 
    updateAction: (formData: FormData) => Promise<{success?: string, error?: string}>, 
    selectOptionData: {
        [key: string]: any,
    }[], 
    selectPrimaryKey: string, 
    selectPrimaryKeyList: string[],
};

function ShowForm( {isShowForm, formTitle, rowData, inputDictInsert, inputDictUpdate, onSetIsShowForm, onSetRowData, 
                    insertAction, updateAction, selectOptionData, selectPrimaryKey, selectPrimaryKeyList}
                    : ShowFormProps ): React.JSX.Element {

    // creating nested object based on primaryKey hierachy list
    let selectOptionDict = {};
    selectOptionData?.forEach(row => {
        let hierachyList: string[] = [];
        selectPrimaryKeyList.forEach(key => {
            hierachyList.push(row[key])
        });
        createNestedObject(selectOptionDict, hierachyList, row);
    });


    const handleShowFormClick = (action: string) => {
        // setIsShowForm(action);
        onSetIsShowForm(action);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // set row data dynamically when input changes
        // setRowData(
        //     {...rowData, [e.target.name]: e.target.value}
        // );
        onSetRowData(
            {...rowData, [e.target.name]: e.target.value}
        );
    };

    const handleDynamicChange = (selectPrimaryKey: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        // this only applies to 'select' type, where an additional primaryKey will be changed at the same time
        if (e.target.value) {
            onSetRowData(
                {...rowData, [e.target.name]: e.target.value, [selectPrimaryKey]: accessNestedObject( selectOptionDict, [e.target.value, selectPrimaryKey] )}
            );
        };
    };

    const handleCancelClick = () => {
        // setIsShowForm(null);
        onSetIsShowForm(null);
    };

    const handleSubmitClick = (action: string) => (e: React.MouseEvent<HTMLButtonElement>) => {

        // set confirmMsg
        let confirmMsg = 'Confirm?';
        if (action === 'insert') {
            confirmMsg = 'Are you sure to add this new item?';
        }
        
        else if (action === 'update') {
            confirmMsg = 'Are you sure to update this item?'
        }

        //if any button other than submit is clicked, preventDefault submit routing!
        if (!window.confirm(confirmMsg)) {
            e.preventDefault();
            return;
        };
        // onSetIsShowForm(null); //proceed to submit form
    };

    return (
        <React.Fragment>
            <ButtonClick buttonTitle={"Insert New Item"} onButtonClick={() => handleShowFormClick('insert')}/>
            <Form formClassName={isShowForm === 'insert' ? 'form-popout': 'form-popout-hidden'} formTitle={"Insert " + formTitle} inputDict={inputDictInsert} rowData={rowData} onInputChange={handleInputChange} onDynamicChange={handleDynamicChange(selectPrimaryKey)} onCancelClick={handleCancelClick} onSubmitClick={handleSubmitClick('insert')} formSubmitAction={insertAction} selectOptionData={selectOptionData} />
            <Form formClassName={isShowForm === 'update' ? 'form-popout': 'form-popout-hidden'} formTitle={"Update " + formTitle} inputDict={inputDictUpdate} rowData={rowData} onInputChange={handleInputChange} onDynamicChange={handleDynamicChange(selectPrimaryKey)} onCancelClick={handleCancelClick} onSubmitClick={handleSubmitClick('update')} formSubmitAction={updateAction} selectOptionData={selectOptionData} />
        </React.Fragment>
    );

};

export default ShowForm;