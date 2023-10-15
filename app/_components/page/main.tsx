'use client'

import React from 'react';
import {useState} from 'react';
import H2 from '@/app/_components/h2';
import ShowForm from '@/app/_components/page/show-form';
import ShowTable from '@/app/_components/page/show-table';
import { type TFormMode, type TRowData, type TInputType } from '@/app/_libs//types';

type MainProps = {
  headerTitle: string, 
  formTitle: string, 
  fetchedData: TRowData[], 
  inputDictInsert: TInputType, 
  inputDictUpdate: TInputType, 
  primaryKey: string, 
  columnListDisplay: string[], 
  insertAction: (formData: FormData) => Promise<{success?: string, error?: string}>, 
  updateAction: (formData: FormData) => Promise<{success?: string, error?: string}>,
  deleteAction: (formData: FormData) => Promise<{success?: string, error?: string}>,
  selectOptionData: {[key: string]: any}[], 
  selectPrimaryKey: string, 
  selectPrimaryKeyList: string[],
};

// a client component with useState
function Main( {headerTitle, formTitle, fetchedData, inputDictInsert, inputDictUpdate, primaryKey, columnListDisplay, 
                insertAction, updateAction, deleteAction, selectOptionData, selectPrimaryKey, selectPrimaryKeyList}: MainProps ) {
                
    // A state that controls whether a form should show, acceptable values: null/insert/update
    const [isShowForm, setIsShowForm] = useState<TFormMode>(null);

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

    return (
      <React.Fragment>
        <H2 headerTitle={headerTitle} /> 
        <ShowForm isShowForm={isShowForm} formTitle={formTitle} rowData={rowData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} insertAction={insertAction} updateAction={updateAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        <ShowTable fetchedData={fetchedData} primaryKey={primaryKey} columnListDisplay={columnListDisplay} onSetIsShowForm={(action) => setIsShowForm(action)} onSetRowData={(d) => setRowData(d)} deleteAction={deleteAction} />
      </React.Fragment>
    );
  };

export default Main;