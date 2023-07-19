import React from "react";
import { styled } from "styled-components";
import Button from "../UI/Button";

const MainContent = () => {
  return (
    <MainContainer>
      <ButtonsBox>
        <ButtonList>
          <h1>Outlined</h1>
          <Button
            // disabled

            disabledTextColor="#C9C9C9"
            disabledBorderColor="1px solid #C9C9C9"
            disabledBgColor="white"
            textHoverColor="#4C94F0"
            hoverBorderColor="3px solid #4C94F0"
            borderColor="1px solid #1F6ED4"
            textActivateColor="white"
            activateBorderColor="solid #0052BC"
            activateBgColor="#0052BC"
            width="198px"
            height="48px"
            bgColor="white"
            color="#1F6ED4"
            title="click"
            marTop="20px"
          />
        </ButtonList>

        <ButtonList>
          <h1>Contained</h1>
          <Button
            // disabled

            disabledTextColor="white"
            disabledBorderColor="1px solid #C9C9C9"
            disabledBgColor="#C9C9C9"
            textHoverColor="white"
            hoverBgColor="#4C94F0"
            hoverBorderColor="solid #4C94F0"
            textActivateColor="white"
            activateBorderColor="solid #0052BC"
            activateBgColor="#0052BC"
            borderColor="solid #1F6ED4"
            width="198px"
            height="53px"
            bgColor="#1F6ED4"
            color="white"
            title="click"
            marTop="15px"
          />
        </ButtonList>
        <ButtonList>
          <h1>Warning</h1>
          <Button
            // disabled

            disabledTextColor="white"
            disabledBorderColor="solid #C9C9C9"
            disabledBgColor="#C9C9C9"
            textHoverColor="white"
            hoverBgColor="#FF912B"
            hoverBorderColor="solid #FF912B"
            textActivateColor="white"
            activateBorderColor="solid #CF6300"
            activateBgColor="#CF6300"
            borderColor="solid #F37705"
            width="186px"
            height="42px"
            bgColor="#F37705"
            color="white"
            title="click"
            marTop="26px"
          />
        </ButtonList>
        <ButtonList>
          <h1>Danger</h1>
          <Button
            // disabled

            disabledTextColor="white"
            disabledBorderColor="solid #C9C9C9"
            disabledBgColor="#C9C9C9"

            textHoverColor="white"
            hoverBgColor="#E54343"
            hoverBorderColor="solid #E54343"

            textActivateColor="white"
            activateBorderColor="solid #C20B0B"
            activateBgColor="#C20B0B"

            borderColor="solid #DF2D2D"
            width="186px"
            height="47px"
            bgColor="#DF2D2D"
            color="white"
            title="click"
            marTop="22px"
          />
        </ButtonList>
      </ButtonsBox>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 80%;
  padding-top: 10%;
  margin: 0 auto;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainContent;
