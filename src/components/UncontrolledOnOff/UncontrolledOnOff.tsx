import React, {useState} from 'react';
import styled from "styled-components";

type OnOffProps = {
    //on: boolean
}
export const UncontrolledOnOff = () => {
    let [on, setOn] = useState(false)

    return (

        <WrapperBox>
            <BoxStyled
                style={on ? {"backgroundColor": "#aefcae"} : {"backgroundColor": "white"}}
                onClick={() => setOn(true)}
            >
                On
            </BoxStyled>
            <BoxStyled
                style={on ? {"backgroundColor": "white"} : {"backgroundColor": "#ff8b8b"}}
                onClick={() => setOn(false)}
            >
                Off
            </BoxStyled>
            <CircleStyled style={on ? {"backgroundColor": "#aefcae"} : {"backgroundColor": "#ff8b8b"}}></CircleStyled>
        </WrapperBox>
    );
};

const WrapperBox = styled.div`
  display: flex;
  width: 210px;
  justify-content: space-between;
  margin-top: 30px;
`

const BoxStyled = styled.div`
  width: 80px;
  height: 40px;
  border: 1px solid black;
`

const CircleStyled = styled.div`
  border-radius: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid black;
`

