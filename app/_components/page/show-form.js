import React from 'react';
import ButtonClick from '@/app/_components/button-click';
import Form from '@/app/_components/form';
import { createNestedObject, accessNestedObject } from '@/app/_actions/utils';

function ShowForm( {isShowForm, formTitle, rowData, inputDictInsert, inputDictUpdate, onSetIsShowForm, onSetRowData, insertState, insertUrl, updateState, updateUrl, selectOptionData, selectPrimaryKey, selectPrimaryKeyList} ) {

    // creating nested object based on primaryKey hierachy list
    let selectOptionDict = {};
    selectOptionData?.forEach(row => {
        let hierachyList = [];
        selectPrimaryKeyList.forEach(key => {
            hierachyList.push(row[key])
        });
        createNestedObject(selectOptionDict, hierachyList, row);
    });


    function handleShowFormClick(action) {
        // setIsShowForm(action);
        onSetIsShowForm(action);
    };

    function handleInputChange(e) {
        // set row data dynamically when input changes
        // setRowData(
        //     {...rowData, [e.target.name]: e.target.value}
        // );
        onSetRowData(
            {...rowData, [e.target.name]: e.target.value}
        );
    };

    function handleDynamicChange(e, selectPrimaryKey) {
        // this only applies to 'select' type, where an additional primaryKey will be changed at the same time
        if (e.target.value) {
            onSetRowData(
                {...rowData, [e.target.name]: e.target.value, [selectPrimaryKey]: accessNestedObject( selectOptionDict, [e.target.value, selectPrimaryKey] )}
            );
        };
    };

    function handleCancelClick() {
        // setIsShowForm(null);
        onSetIsShowForm(null);
    };

    function handleSubmitClick(e, action) {

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
            <Form formClassName={isShowForm === 'insert' ? 'form-popout': 'form-popout-hidden'} formTitle={"Insert " + formTitle} inputDict={inputDictInsert} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onDynamicChange={(e) => handleDynamicChange(e, selectPrimaryKey)} onCancelClick={() => handleCancelClick()} onSubmitClick={(e) => handleSubmitClick(e, 'insert')} formSubmitState={insertState} formSubmitAction={insertUrl} selectOptionData={selectOptionData} />
            <Form formClassName={isShowForm === 'update' ? 'form-popout': 'form-popout-hidden'} formTitle={"Update " + formTitle} inputDict={inputDictUpdate} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onDynamicChange={(e) => handleDynamicChange(e, selectPrimaryKey)} onSubmitClick={(e) => handleSubmitClick(e, 'update')} onCancelClick={() => handleCancelClick('update')} formSubmitState={updateState} formSubmitAction={updateUrl} selectOptionData={selectOptionData} />
        </React.Fragment>
    );

};

export default ShowForm;