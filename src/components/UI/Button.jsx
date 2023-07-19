import React from 'react'
import { styled } from 'styled-components'

const Button = (props) => {
  return (
    <StyledButton 
        disabledBorderColor={props.disabledBorderColor} 
        disabledBgColor={props.disabledBgColor} 
        disabledTextColor={props.disabledTextColor} 

        activateBgColor={props.activateBgColor} 
        activateBorderColor={props.activateBgColor} 
        textActivateColor={props.textActivateColor} 

        textHoverColor={props.textHoverColor} 
        hoverBorderColor={props.hoverBorderColor} 
        hoverBgColor={props.hoverBgColor} 

        disabled={props.disabled} 
        color={props.color} borderColor={props.borderColor} 
        marTop={props.marTop} 
        bgColor={props.bgColor} 
        width={props.width} 
        height={props.height}>{props.title}</StyledButton>
  )
}

const StyledButton = styled.button`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.bgColor};
    margin-top: ${(props) => props.marTop};
    border: ${(props) => props.borderColor};
    border-radius: 9px;
    color: ${(props) => props.color};
    text-transform: uppercase;
    font-size: 16px;
    &:hover{
        transition: 0.3s;
        color: ${(props) => props.textHoverColor};
        background-color: ${(props) => props.hoverBgColor};
        border: ${(props) => props.hoverBorderColor};
    }
    &:active{ 
        color: ${(props) => props.textActivateColor};
        background-color: ${(props) => props.activateBgColor};
        border: ${(props) => props.activateBorderColor};
    }
    &:disabled {
        background-color: ${(props) => props.disabledBgColor};
        color: ${(props) => props.disabledTextColor};
        border: ${(props) => props.disabledBorderColor};
    }

`

export default Button