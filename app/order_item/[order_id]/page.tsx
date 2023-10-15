import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getProduct, getUOM, getOrderId, getOrderItem, insertOrderItem, updateOrderItem, deleteOrderItem } from '@/app/_actions/order_item';
import ToasterContainer from '@/app/_components/toaster-container';
import { type TInputType, type TSelectOrderItem } from '@/app/_libs//types';

// Define generateStaticParams slugs - this will be used to navigate order_item page.tsx based on order_id
export async function generateStaticParams() {

  const orders = await getOrderId();

  return orders.map((order) => {
    order_id: order.order_id
  });
};

// Define staticSiteRendering function
async function OrderItem ( {params}: {params: { order_id: string }} ) {

    const { order_id } = params;

    // fetch data
    const fetchedData = await getOrderItem();

    // declare all input types for inputDictInsert
    const inputDictInsert: TInputType = {
        'order_id': 'readonly',
        'product_id': 'text',
        'product_name': 'text',
        'uom_id': 'text',
        'uom_name': 'text',
        'order_item_quantity': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate: TInputType = {
        'order_item_id': 'hidden',
        'order_id': 'readonly',
        'product_id': 'text',
        'product_name': 'text',
        'uom_id': 'text',
        'uom_name': 'text',
        'order_item_quantity': 'number'
    };    

    // declare primary key
    const primaryKey: (keyof TSelectOrderItem) = 'order_item_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay: (keyof TSelectOrderItem)[] = ['order_item_id', 'order_id', 'product_name', 'uom_name']

    // declare insert/update/delete async function
    const insertAction = insertOrderItem;
    const updateAction = updateOrderItem;
    const deleteAction = deleteOrderItem;

    // fetch data for select options
    const selectOptionData = await getProduct();
    const selectPrimaryKey: (keyof typeof selectOptionData[0]) = 'product_id';
    const selectPrimaryKeyList: (keyof typeof selectOptionData[0])[] = ['product_name'];

    return (
      <React.Fragment>
        <header className='header'>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </header>
        <main className='main'>
            <Main headerTitle={"Manage Order Item for " + order_id} formTitle="Order Item" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
        <ToasterContainer />
      </React.Fragment>
    );
  };

export default OrderItem;