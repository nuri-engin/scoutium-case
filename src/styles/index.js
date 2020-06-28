import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e9eaeb;
  }
`;

export const NavBarWrapper = styled.div`
  background-color: #02063f;
  margin: 0 auto;
  width: 100%;
  height: 60px;
`;

export const TeamPanelWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;
  width: 1110px;
  border-radius: 12px;
  height: 640px;
  overflow: hidden;
`;

export const TeamCardContainerWrapper = styled.div`
  height: 88%;
  margin: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmMsgWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ##02063f;
  font-weight: normal;
  font-size: 24px;
`;

export const EmptyTextWrapper = styled.span`
  font-size: 14px;
  margin-top: 230px;
  text-align: center;
  justify-content: center;
  display: flex;
  line-height: 1.21;
  letter-spacing: normal;
  color: #586f8f;
`;

export const TeamNameWrapper = styled.span`
  font-size: 20px;
  margin-top: 198px;
  margin-left: 87px;
  text-align: center;
  justify-content: center;
  display: inline-block;
  line-height: 1.21;
  letter-spacing: normal;
  color: #02063f;
  font-weight: bold;
`;

export const ErrorMsgWrapper = styled.div`
  color: red;
  font-size: 11px;
  margin-top: 6px;
`;
