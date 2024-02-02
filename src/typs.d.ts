export interface ApiCountryInfo {
    alpha2Code: string,
    alpha3Code: string,
    altSpellings: string[],
    area: number,
    callingCodes: string[],
    capital: string,
    cioc: string,
    currencies: [
        {acronym: string, name: string, otherName: string[]}
        ],
    demonym: string,
    flag: string,
    flags:  { svg: string, png: string },
    independent: boolean,
    languages: [ {
        iso639_1: string,
        iso639_2: string,
        name: string,
        nativeName: string
    } ],
    latlng: number[],
    name: string,
    nativeName: string,
    numericCode: string,
    population: number,
    region: string
    regionalBlocs: [{
        acronym: string,
        name:string,
        otherNames: string[]
    }],
    subregion: string,
    timezones: string[],
    topLevelDomain: string[],
    translations: {
    br: string,
    de: string,
    es: string,
    fa: string,
    fr: string,
    hr: string,
    hu: string,
    it: string,
    ja: string,
    nl: string,
    pt: string,
   }
}
export interface ApiCountry {
    alpha3Code: string,
    independent:boolean,
    name: string,
}

export interface CountryNameCode {
    name: string,
    alpha3Code: string,
}

export interface CountryInfo {
    name:string,
    capital: string
    flag: string,
    population: string,
    borders: string[] | null,
}
