import React, { useCallback, useEffect, useState } from 'react';
import Countries from '../../components/Countries/Countries';
import CountryInfo from '../../components/CountryInfo/CountryInfo';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { COUNTRIES_URL } from '../../constants';
import { ApiCountry, CountryNameCode } from '../../typs';

const MainBlog:React.FC = () => {
    const [countriesState, setCountryState] = useState<CountryNameCode[]>([]);
    const [selectedCountryCode, setSelectedCountryCode] = useState<string | null>(null);

    const fetchData = useCallback( async () => {
        const {data: countriesData} = await axios.get<ApiCountry[]>(COUNTRIES_URL);
        const promises = countriesData.map(async (oneCountry): Promise<CountryNameCode> => {
           return {
                name: oneCountry.name,
                alpha3Code: oneCountry.alpha3Code,
            };
        })
        const countries = await Promise.all(promises);
        setCountryState(countries);
    }, []);


    useEffect(() => {
        void fetchData();
    }, [fetchData]);

    return (
        <>
            <nav className="navbar bg-primary position-fixed  text-uppercase top-0 start-0 w-100">
                <div className="container-fluid ">
                    <h1 className="navbar-brand">Countries</h1>
                </div>
            </nav>
            <div className="d-flex mt-3">
                <div className="col-6">
                    <h2 className="mt-3 p-2">Country list</h2>
                    {countriesState.map((country, index) => (
                        <Countries key={index}
                                   country={country}
                                   onClick={() => setSelectedCountryCode(country.alpha3Code)}
                        />
                    ))}
                </div>
                <div className="col-6">
                    <CountryInfo alphaCode={selectedCountryCode} />
                </div>
            </div>
        </>
    );
};

export default MainBlog;