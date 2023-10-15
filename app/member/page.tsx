import React from 'react';
import HeaderLeft from '@/app/_components/page/header-left';
import HeaderMid from '@/app/_components/page/header-mid';
import HeaderRight from '@/app/_components/page/header-right';
import Main from '@/app/_components/page/main';
import { getMember, insertMember, updateMember, deleteMember } from '@/app/_actions/member';
import ToasterContainer from '@/app/_components/toaster-container';
import { type TRowData, type TInputType, type TSelectMember } from '@/app/_libs//types';

// Define staticSiteRendering function
async function Member () {

    // fetch data
    const fetchedData = await getMember();

    // declare all input types for inputDictInsert
    const inputDictInsert: TInputType = {
        'member_name': 'text',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate: TInputType = {
        'member_id': 'hidden',
        'member_name': 'readonly',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };    

    // declare primary key
    const primaryKey: (keyof TSelectMember) = 'member_id';

    // declare column list to be displayed, this must be a subset of fetched data columns
    const columnListDisplay: (keyof TSelectMember)[] = ['member_name', 'member_bonus_points']

    // declare insert/update/delete async function
    const insertAction = insertMember;
    const updateAction = updateMember;
    const deleteAction = deleteMember;


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
            <Main headerTitle="Manage Member" formTitle="Member" fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertAction={insertAction} updateAction={updateAction} deleteAction={deleteAction} selectOptionData={selectOptionData} selectPrimaryKey={selectPrimaryKey} selectPrimaryKeyList={selectPrimaryKeyList} />
        </main>
        <ToasterContainer />
      </React.Fragment>
    );
  };

export default Member;