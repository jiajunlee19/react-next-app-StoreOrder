import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getMember, getOrder, insertOrder, updateOrder, deleteOrder } from '@/app/_actions/order';
import ToasterContainer from '@/app/_components/toaster-container';
import { type TInputType, type TSelectOrder } from '@/app/_libs//types';

// Define staticSiteRendering function
async function Order () {

    // fetch data
    const fetchedData = await getOrder();

    // declare all input types for inputDictInsert
    const inputDictInsert: TInputType = {
        'member_id': 'dynamic',
        'member_name': 'select'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate: TInputType = {
        'order_id': 'readonly',
        'member_id': 'readonly',
        'member_name': 'readonly'
    };    

    // declare primary key
    const primaryKey: (keyof TSelectOrder) = 'order_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay: (keyof TSelectOrder)[] = ['order_id', 'member_name', 'order_created_date', 'order_updated_date']

    // declare insert/update/delete async function
    const insertAction = insertOrder;
    const updateAction = updateOrder;
    const deleteAction = deleteOrder;

    // fetch data for select options
    const selectOptionData = await getMember();
    const selectPrimaryKey: (keyof typeof selectOptionData[0]) = 'member_id';
    const selectPrimaryKeyList: (keyof typeof selectOptionData[0])[] = ['member_name'];

    return (
      <React.Fragment>
        <header className='header'>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </header>
        <main className='main'>
            <Main headerTitle="Manage Order" formTitle="Order" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
        <ToasterContainer />
      </React.Fragment>
    );
  };

export default Order;