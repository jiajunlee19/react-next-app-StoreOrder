'use client'

import React from 'react';
import {useState} from 'react';
import H2 from '../h2';
import ShowForm from '../page/show-form';
import ShowTable from '../page/show-table';
import { experimental_useFormState as useFormState } from 'react-dom';

// a client component with useState
function Main( {headerTitle, fetchedData, inputDictInsert, inputDictUpdate, primaryKey, columnListDisplay, insertAction, updateAction, deleteAction} ) {

    // Control form
    const initialState = { message: null }
    const [insertState, insertUrl] = useFormState(insertAction, initialState);
    const [updateState, updateUrl] = useFormState(updateAction, initialState);
    const [deleteState, deleteUrl] = useFormState(deleteAction, initialState);

    // A state that controls whether a form should show, acceptable values: null/insert/update
    const [isShowForm, setIsShowForm] = useState(null);

    // Init rowData column keys accordingly for insert/update
    let initRowData = fetchedData[0];
    if (isShowForm === 'insert') {
        initRowData = Object.fromEntries(Object.entries(fetchedData[0] || {}).filter( ([key,val]) => Object.keys(inputDictInsert).includes(key)));
    }
    else if (isShowForm === 'update') {
        initRowData = Object.fromEntries(Object.entries(fetchedData[0] || {}).filter( ([key,val]) => Object.keys(inputDictUpdate).includes(key)));
    }

    // A state that controls rowData when form input changes
    const [rowData, setRowData] = useState(initRowData);

    // Configure loader based on state message
    let loaderClassName = 'loader-hidden';
    let loaderTitle = '';
    if (insertState?.message || updateState?.message || deleteState?.message) {
      // show loader
      loaderClassName = 'loader';

      // show latest updated message
      if (insertState.message && insertState.message !== loaderTitle) {
        loaderTitle = insertState.message;
      }
      else if (updateState.message && updateState.message !== loaderTitle) {
        loaderTitle = updateState.message;
      }
      else if (deleteState.message && deleteState.message !== loaderTitle) {
        loaderTitle = deleteState.message;
      }
    }

    return (
      <React.Fragment>
        <H2 headerTitle={headerTitle} /> 
        <ShowForm isShowForm={isShowForm} rowData={rowData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} insertState={insertState} insertUrl={insertUrl} updateState={updateState} updateUrl={updateUrl} />
        <ShowTable loaderClassName={loaderClassName} loaderTitle={loaderTitle} fetchedData={fetchedData} primaryKey={primaryKey} columnListDisplay={columnListDisplay} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} deleteState={deleteState} deleteUrl={deleteUrl} />
      </React.Fragment>
    );
  };

export default Main;