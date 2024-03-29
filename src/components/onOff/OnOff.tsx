
import React, {useState} from 'react';
import styled from "styled-components";

type OnOffProps = {
    onOff: boolean
    onClick: (onOff: boolean) => void
}
export const OnOff = (props: OnOffProps) => {
    const offClicked = () => {
        props.onClick(false)
    }
    const onClicked = () => {
        props.onClick(true)
    }
    return (

        <WrapperBox>
            <BoxStyled
                style={props.onOff ? {"backgroundColor": "#aefcae"} : {"backgroundColor": "white"}}
                onClick={onClicked}
            >
                On
            </BoxStyled>
            <BoxStyled
                style={props.onOff ? {"backgroundColor": "white"} : {"backgroundColor": "#ff8b8b"}}
                onClick={offClicked}
            >
                Off
            </BoxStyled>
            <CircleStyled
                style={props.onOff ? {"backgroundColor": "#aefcae"} : {"backgroundColor": "#ff8b8b"}}></CircleStyled>
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