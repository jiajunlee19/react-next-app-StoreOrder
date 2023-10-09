import React from 'react';

type H2Props = {
    headerTitle: string,
};

function H2( {headerTitle}: H2Props ): React.JSX.Element {
    return (
        <h2 className="h2">{headerTitle}</h2>
    );
};

export default H2;