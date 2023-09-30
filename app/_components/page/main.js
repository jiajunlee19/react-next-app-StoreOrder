'use client'

import React from 'react';
import {useState} from 'react';
import H2 from '../h2';
import ShowForm from '../page/show-form';
import ShowTable from '../page/show-table';
import { experimental_useFormState as useFormState } from 'react-dom';

// a client component with useState
function Main( {headerTitle, loaderTitle, fetchedData, inputDictInsert, inputDictUpdate, primaryKey, columnListDisplay, insertUrl, updateUrl, deleteAction} ) {

    // Control form
    const initialState = { message: null }
    const [state, deleteUrl] = useFormState(deleteAction, initialState);

    // A state that controls whether a form should show, acceptable values: null/insert/update
    const [isShowForm, setIsShowForm] = useState(null);

    // A state that controls rowData when form input changes
    const [rowData, setRowData] = useState(fetchedData[0]);

    return (
      <React.Fragment>
        <H2 headerTitle={headerTitle} /> 
        <ShowForm isShowForm={isShowForm} rowData={rowData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} insertUrl={insertUrl} updateUrl={updateUrl} />
        <ShowTable loaderTitle={loaderTitle} fetchedData={fetchedData} primaryKey={primaryKey} columnListDisplay={columnListDisplay} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} deleteUrl={deleteUrl} />
      </React.Fragment>
    );
  };

export default Main;