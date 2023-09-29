import React from 'react';
import {useState} from 'react';
import H2 from '../h2';
import ButtonClick from '../button-click';
import Form from '../form';
import Loader from '../loader';
import Table from '../table';

function ShowFormState() {

    // A server component that control the state of show form
    const [isShowForm, setIsShowForm] = useState(null);

    // fetched data
    const fetchedData = 
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
    ];

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
        isShowForm, handleShowFormClick, fetchedData, rowData, handleCancelClick, handleSubmitClick, handleInputChange
    );
};

export default ShowFormState;