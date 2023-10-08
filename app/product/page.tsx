import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getUOM, getProduct, insertProduct, updateProduct, deleteProduct } from '@/app/_actions/product';

// Define staticSiteRendering function
async function Product () {

    // fetch data
    const fetchedData = await getProduct();

    // declare all input types for inputDictInsert
    const inputDictInsert = {
        'product_name': 'text',
        'uom_id': 'dynamic',
        'uom_name': 'select',
        'product_unit_price': 'number',
        'product_bonus_points': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate = {
        'product_id': 'hidden',
        'product_name': 'readonly',
        'uom_name': 'readonly',
        'product_unit_price': 'number',
        'product_bonus_points': 'number'
    };    

    // declare primary key
    const primaryKey = 'product_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay = ['product_name', 'uom_name', 'product_unit_price', 'product_bonus_points']

    // declare insert/update/delete async function
    const insertAction = insertProduct;
    const updateAction = updateProduct;
    const deleteAction = deleteProduct;


    // fetch data for select options
    const selectOptionData = await getUOM();
    const selectPrimaryKey = 'uom_id';
    const selectPrimaryKeyList: string[] = ['uom_name'];

    return (
      <React.Fragment>
        <header className='header'>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </header>
        <main className='main'>
            <Main headerTitle="Manage Product" formTitle="Product" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
      </React.Fragment>
    );
  };

export default Product;