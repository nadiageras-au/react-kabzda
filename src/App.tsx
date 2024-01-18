import React from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
//import {Rating} from "./components/Rating/Rating";
import styled from "styled-components";
import {StyledBtn} from "./components/Button/Button.styled";
import {myTheme} from "./styles/Theme.styled";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {OnOff} from "./components/onOff/OnOff";


function App() {
    return (
        <div>
            <AppTitle/>
            <OnOff/>
            <UncontrolledRating value={3}/>
            <Accordion titleValue="Menu" collapsed={false}/>


            <UncontrolledRating value={4}/>

            <Accordion titleValue="List of Articles" collapsed={false}/>

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
