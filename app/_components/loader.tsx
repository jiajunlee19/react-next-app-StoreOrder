import React from 'react';

type LoaderProps = {
    loaderClassName: string,
    loaderTitle: string,
};

function Loader( {loaderClassName, loaderTitle}: LoaderProps ): React.JSX.Element {
    return (
        <div role="status" className={loaderClassName}>
            <span>{loaderTitle}</span>
        </div>
    );
};

export default Loader;