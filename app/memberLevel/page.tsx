import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getMemberLevel, insertMemberLevel, updateMemberLevel, deleteMemberLevel } from '@/app/_actions/memberLevel';
import ToasterContainer from '../_components/toaster-container';

// Define staticSiteRendering function
async function MemberLevel () {

    // fetch data
    const fetchedData = await getMemberLevel();

    // declare all input types for inputDictInsert
    const inputDictInsert = {
        'member_level_name': 'text',
        'bonus_points_min': 'number',
        'bonus_points_max': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate = {
        'member_level_id': 'hidden',
        'member_level_name': 'readonly',
        'bonus_points_min': 'number',
        'bonus_points_max': 'number'
    };    

    // declare primary key
    const primaryKey = 'member_level_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay = ['member_level_name', 'bonus_points_min', 'bonus_points_max']

    // declare insert/update/delete async function
    const insertAction = insertMemberLevel;
    const updateAction = updateMemberLevel;
    const deleteAction = deleteMemberLevel;


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
            <Main headerTitle="Manage Member Level" formTitle="Member Level" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
        <ToasterContainer />
      </React.Fragment>
    );
  };

export default MemberLevel;