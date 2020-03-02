import React from 'react';
import './App.css';
import ListRegion from './components/ListRegion/ListRegion';
//import FetchData from './components/FetchData/FetchData';
//import GoogleMap from './components/GoogleMap/GoogleMap.js';
import {Container, Row, Col}  from 'react-grid';
import {createStore} from "redux";

function selectedRegion(state = {},action) {
    switch (action.type) {
        case 'SELECT':
            return action.selected;
        default:
            return state;
    }
}

const store = createStore(selectedRegion);


function App() {
  return (
    <Container fluid>
         <Row>
             <Col md={12} className="Header">
               <header>
                  Wybierz z listy województwo, a znajdziemy dla Ciebie najbliższe punkty z Twojej okolicy
               </header>
             </Col>
         </Row>
         <Row className="ListRegion">
             <Col md={6} className="ListRegionLabel">
                 Województwo:
             </Col>
             <Col md={6}>
                 <ListRegion />
             </Col>
         </Row>
         <Row>
             <Col md={12}>
                {/*<GoogleMap />*/}
             </Col>
         </Row>
    </Container>

  );
}

export default App;
