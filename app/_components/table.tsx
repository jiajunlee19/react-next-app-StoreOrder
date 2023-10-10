import React from 'react';

type TableProps = {
    tableHead: React.JSX.Element,
    tableBody: React.JSX.Element[],
};

function Table( {tableHead, tableBody}: TableProps ): React.JSX.Element {
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