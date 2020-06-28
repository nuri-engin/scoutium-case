import React from "react";
import "./TeamPanel.css";
import styled from "styled-components";
import TopBar from "../../components/TopBar/TopBar";
import TeamCardsContainer from "../TeamCardsContainer.js/TeamCardsContainer";

let TeamPanelWrapper = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  background-color: white;
  width: 1110px;
  border-radius: 12px;
  height: 640px;
  overflow: hidden;
`;

function TeamPanel() {
  return (
    <TeamPanelWrapper>
      <TopBar />
      <TeamCardsContainer />
    </TeamPanelWrapper>
  );
}

export default TeamPanel;
