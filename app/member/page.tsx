import React from 'react';
import HeaderLeft from '../_components/page/header-left';
import HeaderMid from '../_components/page/header-mid';
import HeaderRight from '../_components/page/header-right';
import Main from '../_components/page/main';
import prisma from '../../prisma/prisma';

// Define staticSiteRendering function
async function GetMember () {
    const fetchedData = await prisma.member.findMany({

    });

    // declare all input types for inputDictInsert
    const inputDictInsert = {
        'member_name': 'text',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };

    // declare all input types for inputDictUpdate
    const inputDictUpdate = {
        'member_id': 'hidden',
        'member_name': 'readonly',
        'member_password': 'password',
        'member_bonus_points': 'number'
    };    

    // declare primary key
    const primaryKey = 'member_id';

    // filter fetched data into given column list
    const columnListDisplay = ['member_name', 'member_bonus_points']

    // declare insert/update/delete URL
    const insertUrl = "/insertMember";
    const updateUrl = "/updateMember";
    const deleteUrl = "/deleteMember";

    return (
      <React.Fragment>
        <header className='header'>
          <HeaderLeft />
          <HeaderMid />
          <HeaderRight />
        </header>
        <main className='main'>
            <Main headerTitle="Manage Member" loaderTitle="Loading Member..." fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} primaryKey={primaryKey} columnListDisplay={columnListDisplay} insertUrl={insertUrl} updateUrl={updateUrl} />
        </main>
      </React.Fragment>
    );
  };

export default GetMember;