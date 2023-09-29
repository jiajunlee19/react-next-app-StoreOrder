'use client'

import React from 'react';
import ButtonClick from '../button-click';
import Form from '../form';

import {useState} from 'react';


function ShowForm( {fetchedData, inputDictInsert, inputDictUpdate} ) {

    // A state that controls whether a form should show
    const [isShowForm, setIsShowForm] = useState(null);

    // A state that controls rowData when form input changes
    const [rowData, setRowData] = useState(fetchedData[0]);


    function handleShowFormClick(action) {
        setIsShowForm(action);
    };

    function handleInputChange(e) {
        // set row data dynamically when input changes
        setRowData(
            {...rowData, [e.target.name]: e.target.value}
        );
    };

    function handleCancelClick() {
        setIsShowForm(null);
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
        return; //proceed to submit form
    };

    return (
        <React.Fragment>
            <ButtonClick buttonTitle={"Insert Member"} onButtonClick={() => handleShowFormClick('insert')}/>
            {isShowForm === "insert" && <Form formTitle={"Insert Member"} action={"insert"} inputDict={inputDictInsert} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onCancelClick={() => handleCancelClick()} onSubmitClick={(e) => handleSubmitClick(e, 'insert')} />}
            {isShowForm === "update" && <Form formTitle={"Update Member"} action={"update"} inputDict={inputDictUpdate} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onSubmitClick={(e) => handleSubmitClick(e, 'update')} onCancelClick={() => handleCancelClick('update')} />}
        </React.Fragment>
    );

};

export default ShowForm;