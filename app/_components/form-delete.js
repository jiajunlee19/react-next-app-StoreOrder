import React from 'react';

function FormDelete( {deleteUrl, primaryID, onDeleteClick} ) {
    return (
        <form method="post" action={deleteUrl}>
            <input type="hidden" value={primaryID} required readOnly/>
            <input type="submit" value="delete" onClick={onDeleteClick}/>
        </form>
    );
};

export default FormDelete;