import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { COUNTRY_INFO_URL } from '../../constants';
import { ApiCountryInfo, CountryInfo } from '../../typs';

interface Props {
    alphaCode: string | null;
}

const CountryInfo: React.FC<Props> = ({alphaCode}) => {
    const [countryState, setCountryState] = useState<CountryInfo>();

    const fetchCountry = useCallback(async () => {
        if (alphaCode !== null) {
            const {data: country} = await axios.get<ApiCountryInfo>(COUNTRY_INFO_URL + alphaCode);
            let bordersName = []
            if (country.borders) {
                const countryBordersName = country.borders.map(async (alphaCode) => {
                    const {data: borderCountry} = await axios.get<ApiCountryInfo>(COUNTRY_INFO_URL + alphaCode);
                    return borderCountry.name;
                })
                bordersName = await Promise.all(countryBordersName);
            }

            const countryForState: CountryInfo = {
                name: country.name,
                capital: country.capital,
                flag: country.flag,
                population: country.population,
                borders: country.borders ? bordersName : null,
            };
            setCountryState(countryForState);
        }
    }, [countryState])


    useEffect(() => {
        void fetchCountry();
    }, [fetchCountry]);

    return countryState && (
        <>
            <h2 className="mt-3 p-2 ">Country information</h2>
            <div className="clearfix">
                <div className="img float-end w-50">
                    <img className="w-100 h-auto " src={countryState.flag} alt={countryState.name}/>
                </div>
                <div className="float-start w-50 pt-3 mb-3">
                    <h3>{countryState.name}</h3>
                    <p>Capital: {countryState.capital}</p>
                    <p>Population: {countryState.population}</p>

                </div>
            </div>
            <div className="mt-3">
                <h4 className="text-center">Borders</h4>
                <ul className="text-start">
                    {countryState!.borders?.map((name, index) => {
                        return countryState!.borders && <li key={index}>{name}</li>
                    })}
                </ul>
            </div>
        </>


    );
};

export default CountryInfo;