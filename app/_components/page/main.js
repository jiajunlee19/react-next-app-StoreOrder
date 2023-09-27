'use client'

import React from 'react';
import {useState} from 'react';
import H2 from '../h2';
import ButtonClick from '../button-click';
import Form from '../form';
import Loader from '../loader';
import Table from '../table';

function Main() {

    // control state of show form (insert/update)
    const [isShowFormInsert, setIsShowFormInsert] = useState(false);
    const [isShowFormUpdate, setIsShowFormUpdate] = useState(false);

    // control fetched data
    const [fetchedData, setFetchedData] = useState(
        [
            {
                'member_id': 'id1',
                'member_name': 'jiajunlee',
                'member_password':'pwd1',
                'member_bonus_points': 0
            },
            {
                'member_id': 'id2',
                'member_name': 'ken',
                'member_password':'pwd2',
                'member_bonus_points': 0
            }
        ]
    );

    // control state of data to be updated
    const [rowData, setRowData] = useState(fetchedData[0]);

    // declare all input types for inputDictInsert
    const inputDictInsert = {
        'member_name': 'text',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate = {
        'member_id': 'hidden',
        'member_name': 'readonly',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };

    // declare primary key
    const primaryKey = 'member_id';

    // filter fetched data into given column list
    const columnListDisplay = ['member_name', 'member_bonus_points']

    // To get parent up to multiple level like e.target.parentNode.parentNode.....
    function getParentNode(element, level = 1) { // 1 - default value (if no 'level' parameter is passed to the function)
        while (level-- > 0) {
          element = element.parentNode;
          if (!element) return null; // to avoid a possible "TypeError: Cannot read property 'parentNode' of null" if the requested level is higher than document
        }
        return element;
    }

    // Filter columns based on columnList provided
    const filteredData = fetchedData.map((row) => {
        if (columnListDisplay && columnListDisplay.length > 0) {
            return Object.fromEntries(Object.entries(row).filter( ([key,val]) => columnListDisplay.includes(key)));
        }
        else {
            return row;
        }
    });

    //taking 1st fetched data row key to generate table headers
    const tableHead =
    <tr>
        {Object.keys(filteredData[0]).map(key => {
            return (
                <th key={key}>{key}</th>      
            );
        })}
        <th>action</th>
    </tr>;


    //taking fetched data rows as table body
    const tableBody = filteredData.map((row, i) => {
        
        const tableData = Object.keys(row).map(column => {
            return  <td key={column}>{row[column]}</td>;
        });

        return (
            //use each table row UID as key value 
            <tr key={fetchedData[i][primaryKey]}>
                {tableData}
                <td>
                    <button onClick={(e) => handleUpdateClick(e)}>update</button><br/>
                    <button onClick={(e) => handleDeleteClick(e)}>delete</button>
                </td>
            </tr>
        );

    });

    function handleInputChange(e) {
        // set row data dynamically when input changes
        setRowData(
            {...rowData, [e.target.name]: e.target.value}
        );
    };

    function handleUpdateClick(e) {
        setRowData({
            'member_id': 'id1',
            'member_name': 'jiajunlee',
            'member_password':'pwd1',
            'member_bonus_points': 0
        });
        handleShowFormClick('update');
    };



    function handleDeleteClick(e) {
        if (!window.confirm('Are you sure to delete this item?')) {
            // pass
            return;
        }

        //do delete here
        // WIP
        return;
    };

    function handleShowFormClick(action) {
        if (action === 'insert') {
            setIsShowFormInsert(true);
        }
        else if (action === 'update') {
            setIsShowFormUpdate(true);
        }
        return;
    };

    function handleCancelClick(action) {
        if (action === 'insert') {
            setIsShowFormInsert(false);
        }
        else if (action === 'update') {
            setIsShowFormUpdate(false);
        }
        return;
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
        <main className="main">
            <H2 headerTitle={"Manage Member"} />
            <div className="flex-container">
                <ButtonClick buttonTitle={"Insert Member"} onButtonClick={() => handleShowFormClick('insert')}/>
                {/* <ButtonClick buttonTitle={"Update Member"} onButtonClick={() => handleShowFormClick('update')} /> */}
            </div>

            {isShowFormInsert && <Form formTitle={"Insert Member"} action={"insert"} inputDict={inputDictInsert} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onSubmitClick={(e) => handleSubmitClick(e, 'insert')} onCancelClick={() => handleCancelClick('insert')} />}
            {isShowFormUpdate && <Form formTitle={"Update Member"} action={"update"} inputDict={inputDictUpdate} rowData={rowData} onInputChange={(e) => handleInputChange(e)} onSubmitClick={(e) => handleSubmitClick(e, 'update')} onCancelClick={() => handleCancelClick('update')} />}

            <Loader loaderTitle={"Loading Members..."} />
            <Table tableHead={tableHead} tableBody={tableBody} />
        </main>
    );
}

export default Main;