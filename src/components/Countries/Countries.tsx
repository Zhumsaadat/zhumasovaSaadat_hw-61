import React, { useCallback, useEffect, useState } from 'react';
import { CountryNameCode } from '../../typs';

interface Props {
    country: CountryNameCode;
    onClick: React.MouseEventHandler;
}
const Countries: React.FC<Props> = ({country, onClick}) => {

    return (
        <>
            <div className="border border-black shadow mt-3 p-2 " onClick={onClick}>
                {country.name}
            </div>
        </>
    );
};

export default Countries;