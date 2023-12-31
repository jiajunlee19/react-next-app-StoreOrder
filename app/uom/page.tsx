import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getUOM, insertUOM, updateUOM, deleteUOM } from '@/app/_actions/uom';
import ToasterContainer from '@/app/_components/toaster-container';
import { type TRowData, type TInputType, type TSelectUom } from '@/app/_libs//types';

// Define staticSiteRendering function
async function UOM () {

    // fetch data
    const fetchedData = await getUOM();

    // declare all input types for inputDictInsert
    const inputDictInsert: TInputType = {
        'uom_name': 'text'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate: TInputType = {
        'uom_id': 'hidden',
        'uom_name': 'readonly'
    };    

    // declare primary key
    const primaryKey: (keyof TSelectUom) = 'uom_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay: (keyof TSelectUom)[] = ['uom_name']

    // declare insert/update/delete async function
    const insertAction = insertUOM;
    const updateAction = updateUOM;
    const deleteAction = deleteUOM;


    // fetch data for select options
    const selectOptionData: TRowData[] = [];
    const selectPrimaryKey: string = '';
    const selectPrimaryKeyList: string[] = [];

    return (
      <React.Fragment>
        <header className='header'>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </header>
        <main className='main'>
            <Main headerTitle="Manage UOM" formTitle="UOM" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
        <ToasterContainer />
      </React.Fragment>
    );
  };

export default UOM;