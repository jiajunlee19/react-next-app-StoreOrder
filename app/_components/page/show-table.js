import React from 'react';
import Loader from '../loader';
import Table from '../table';
import FormDelete from '../form-delete';

function ShowTable( {loaderTitle, fetchedData, primaryKey, columnListDisplay, onSetIsShowForm, onSetRowData, deleteUrl} ) {

    function handleUpdateClick(e, d) {
        // setRowData({
        //     'member_id': 'id1',
        //     'member_name': 'jiajunlee',
        //     'member_password':'pwd1',
        //     'member_bonus_points': 0
        // });
        // handleShowFormClick('update');
        onSetRowData(d);

        onSetIsShowForm('update');

    };


    function handleDeleteClick(e) {

        const confirmMsg = 'Are you sure to delete this item?'

        //if any button other than submit is clicked, preventDefault submit routing!
        if (!window.confirm(confirmMsg)) {
            e.preventDefault();
            return;
        };
        return; //proceed to submit form
    };

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
                    <button onClick={(e) => handleUpdateClick(e, fetchedData[i])}>update</button><br/>
                    <FormDelete deleteUrl={deleteUrl} primaryKey={primaryKey} primaryID={fetchedData[i][primaryKey]} onDeleteClick={(e) => handleDeleteClick(e)} />
                </td>
            </tr>
        );

    });

    return (
        <React.Fragment>
            <Loader loaderTitle={loaderTitle} />
            <Table tableHead={tableHead} tableBody={tableBody} />
        </React.Fragment>
    );
};

export default ShowTable;