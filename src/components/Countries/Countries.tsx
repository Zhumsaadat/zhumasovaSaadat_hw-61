import React, { useCallback, useEffect, useState } from 'react';
import { CountryNameCode } from '../../typs';

interface Props {
    country: CountryNameCode;
    onClick: React.MouseEventHandler;
}
const Countries: React.FC<Props> = ({country, onClick}) => {

    return (
        <>
          <div className='text-start p-1 m-2 bg-light-subtle' onClick={onClick}>{country.name}</div>
        </>
    );
};

export default Countries;