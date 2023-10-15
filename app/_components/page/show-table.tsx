import React from 'react';
import Table from '@/app/_components/table';
import FormDelete from '@/app/_components/form-delete';
import { type TFormMode, type TRowData } from '@/app/_libs//types';
import { type } from 'os';

type ShowTableProps = {
    fetchedData: TRowData[], 
    primaryKey: string, 
    columnListDisplay: string[], 
    onSetIsShowForm: React.Dispatch<React.SetStateAction<TFormMode>>, 
    onSetRowData: React.Dispatch<React.SetStateAction<TRowData>>, 
    deleteAction: (formData: FormData) => Promise<{success?: string, error?: string}>,
};

function ShowTable( {fetchedData, primaryKey, columnListDisplay, 
                    onSetIsShowForm, onSetRowData, deleteAction}: ShowTableProps ): React.JSX.Element {

    const handleUpdateClick = (d: TRowData) => (e: React.MouseEvent<HTMLButtonElement>) => {
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


    const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {

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
        {Object.keys(filteredData[0] || {}).map(key => {
            return (
                <th key={key}>{key}</th>      
            );
        })}
        <th>action</th>
    </tr>;


    //taking fetched data rows as table body
    const tableBody = filteredData.map((row, i) => {
        const tableData = Object.keys(row).map(column => {
            if (row[column] instanceof Date) {
                // if it is a Date object, convert it to dateString
                const dateStringList = new Date((row[column] as Date).getTime() - ((row[column] as Date).getTimezoneOffset() * 60000 ))
                                    .toISOString()
                                    .split("T");
                const dateString = dateStringList[0];
                const timeString = dateStringList[1].split(".")[0];
                return  <td key={column}>{dateString + " " + timeString}</td>;
            }
            else {
                return  <td key={column}>{row[column].toString()}</td>;
            }
        });
        
        return (
            //use each table row UID as key value 
            <tr key={fetchedData[i][primaryKey].toString()}>
                {tableData}
                <td>
                    <button onClick={handleUpdateClick(fetchedData[i])}>update</button><br/>
                    <FormDelete formSubmitAction={deleteAction} primaryKey={primaryKey} primaryID={fetchedData[i][primaryKey].toString()} onDeleteClick={handleDeleteClick} />
                </td>
            </tr>
        );

    });

    return (
        <React.Fragment>
            <Table tableHead={tableHead} tableBody={tableBody} />
        </React.Fragment>
    );
};

export default ShowTable;