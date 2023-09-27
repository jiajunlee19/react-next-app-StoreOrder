import React from 'react';

function Table( {tableHead, tableBody} ) {
    return (
        <table>
            <thead>
                {tableHead}
            </thead>
            <tbody>
                {tableBody}
            </tbody>
        </table>
    );
};

export default Table;