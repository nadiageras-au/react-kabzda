import React, {useState} from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
//import {Rating} from "./components/Rating/Rating";
import styled from "styled-components";
import {StyledBtn} from "./components/Button/Button.styled";
import {myTheme} from "./styles/Theme.styled";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/onOff/OnOff";
import {UncontrolledAccordion} from "./components/__UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    let [accordionCollapsed, setAccordionCollapsed] = useState(true)
    let [onOff, setOnOff] = useState(false)
    return (
        <div>
            <AppTitle/>
            {/*<OnOff/>*/}
            <OnOff onOff={onOff} onClick={setOnOff}/>
            ------------------------
            <UncontrolledOnOff />
            <UncontrolledRating value={4}/>

            {/*<Accordion titleValue="Menu" collapsed={accordionCollapsed} onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}/>*/}

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion titleValue="List of Articles"/>

        </div>
    );
}

function AppTitle() {
    return <h1>This is APP title</h1>
}


export default App;

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
    transition: background-color .3s ease-in-out;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
    background-color: #fdf9f1;
  }
`
