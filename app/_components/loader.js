import React from 'react';

function Loader( {loaderTitle} ) {
    return (
        <div role="status" className="loader">
            <span>{loaderTitle}</span>
        </div>
    );
};

export default Loader;