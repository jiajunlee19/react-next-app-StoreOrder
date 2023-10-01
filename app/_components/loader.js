import React from 'react';

function Loader( {loaderClassName, loaderTitle} ) {
    return (
        <div role="status" className={loaderClassName}>
            <span>{loaderTitle}</span>
        </div>
    );
};

export default Loader;