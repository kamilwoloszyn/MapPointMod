import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import './css/style.css';
import strAllReplace from './strUtilities/strAllReplace';
import transformToSelectOptions from './transformPolishLetters/transformToSelectOptions';

function ListRegion() {
    const arrayOfRegions = [];
    arrayOfRegions.push("Dolnośląskie");
    arrayOfRegions.push("Kujawsko-Pomorskie");
    arrayOfRegions.push("Lubelskie");
    arrayOfRegions.push("Lubuskie");
    arrayOfRegions.push("Łódzkie");
    arrayOfRegions.push("Małopolskie");
    arrayOfRegions.push("Mazowieckie");
    arrayOfRegions.push("Opolskie");
    arrayOfRegions.push("Podkarpackie");
    arrayOfRegions.push("Podlaskie");
    arrayOfRegions.push("Pomorskie");
    arrayOfRegions.push("Śląskie");
    arrayOfRegions.push("Świętokrzyskie");
    arrayOfRegions.push("Warmińsko-Mazurskie");
    arrayOfRegions.push("Wielkopolskie");
    arrayOfRegions.push("Zachodniopomorskie");

    const [selectedRegion,setSelectedRegion] = useState();
    const regions = transformToSelectOptions(arrayOfRegions);
    const saveSelected = (val) =>{
        setSelectedRegion(val);
    }

    return(
    <div>
        <Select onChange={saveSelected} options={regions}/>
    </div>
  )
}

export default ListRegion;
