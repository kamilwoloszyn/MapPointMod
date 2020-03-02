import React,{useEffects} from 'react';
import styled from 'styled-components';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


function GoogleMap(props)
{
  var selectedRegion = props.selectedRegion,
      points = props.points;


  return(
    <div>
      <Map>

      </Map>
    </div>
  )
}

export default GoogleMap;
