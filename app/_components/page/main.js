import React from 'react';
import H2 from '../h2';
import ShowForm from '../page/show-form';
import ShowTable from '../page/show-table';

function Main( {headerTitle, loaderTitle, fetchedData, inputDictInsert, inputDictUpdate, primaryKey, columnListDisplay} ) {

    return (
      <React.Fragment>
        <H2 headerTitle={headerTitle} /> 
        <ShowForm fetchedData={fetchedData} inputDictInsert={inputDictInsert} inputDictUpdate={inputDictUpdate} />
        <ShowTable loaderTitle={loaderTitle} fetchedData={fetchedData} primaryKey={primaryKey} columnListDisplay={columnListDisplay} />
      </React.Fragment>
    );
  };

export default Main;