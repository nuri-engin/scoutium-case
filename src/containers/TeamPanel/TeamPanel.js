import React from "react";
import { TeamPanelWrapper } from "../../styles";
import TopBar from "../../components/TopBar/TopBar";
import TeamCardsContainer from "../TeamCardsContainer.js/TeamCardsContainer";

function TeamPanel() {
  return (
    <TeamPanelWrapper>
      <TopBar />
      <TeamCardsContainer />
    </TeamPanelWrapper>
  );
}

export default TeamPanel;
