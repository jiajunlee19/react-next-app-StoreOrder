'use client'

import React from 'react';
import Loader from '../loader';
import Table from '../table';

function ShowTable( {loaderTitle, fetchedData, primaryKey, columnListDisplay} ) {

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

    return (
        <React.Fragment>
            <Loader loaderTitle={loaderTitle} />
            <Table tableHead={tableHead} tableBody={tableBody} />
        </React.Fragment>
    );
};

export default ShowTable;