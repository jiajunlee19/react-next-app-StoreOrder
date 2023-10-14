import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getUOM, insertUOM, updateUOM, deleteUOM } from '@/app/_actions/uom';
import ToasterContainer from '@/app/_components/toaster-container';

// Define staticSiteRendering function
async function UOM () {

    // fetch data
    const fetchedData = await getUOM();

    // declare all input types for inputDictInsert
    const inputDictInsert = {
        'uom_name': 'text'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate = {
        'uom_id': 'hidden',
        'uom_name': 'readonly'
    };    

    // declare primary key
    const primaryKey = 'uom_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay = ['uom_name']

    // declare insert/update/delete async function
    const insertAction = insertUOM;
    const updateAction = updateUOM;
    const deleteAction = deleteUOM;


    // fetch data for select options
    const selectOptionData: any = [];
    const selectPrimaryKey = '';
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