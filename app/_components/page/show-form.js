import React from 'react';
import ButtonClick from '../button-click';
import Form from '../form';

function ShowForm( {isShowForm, rowData, inputDictInsert, inputDictUpdate, onSetIsShowForm, onSetRowData} ) {

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