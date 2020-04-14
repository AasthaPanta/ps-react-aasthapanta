import React from 'react';
import ProgressBar from 'ps-react/ProgressBar';

/** 100% Progress and height 10px */
const Example100Percent = () => {
    return(
        <ProgressBar percent={100} width={150} height={10} />
    )
}

export default Example100Percent;