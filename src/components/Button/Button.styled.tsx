import styled, {css} from "styled-components";
//import {MyAnimation} from "../../styles/animations/Animations";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    btnType?: "primary"|"outlined"
    // primary?: boolean
    // outlined?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  //background-color: #fb3f78;
 // background-color: #e8f60a;
  padding: 10px 20px;
  margin: 10px;
  //color: #fff;
  font-size: ${props => props.fontSize || "12px"};


  &:hover {
    background-color: #efa2a2;
  }

  ${props => props.btnType === "outlined" && css<StyledBtnPropsType>`
    //outlined
    border: 2px solid ${props => props.color || "#fb3f78"};
    color: ${props => props.color || "#fb3f78"};
  `}

  ${props => props.btnType === "primary"  && css<StyledBtnPropsType>`
  //primary
  background-color: ${props => props.color || "#fb3f78"};
  color: #fff;
`}
 
`
