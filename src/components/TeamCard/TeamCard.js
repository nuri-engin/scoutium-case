import React, { Component } from "react";
import { Card, Container, Button } from "react-bootstrap";
import PlayerCard from "../Player/PlayerCard";
import { EmptyTextWrapper, TeamNameWrapper } from "../../styles";
import { connect } from "react-redux";
import SubstituteModal from "../Modals/SubstituteModal.js";
import { TeamCardCtrl as ctrl} from "./TeamCardCtrl";

class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSubPlayerModal: false,
      inPlayer: window.translations.enterPlayerName,
      outPlayer: window.translations.enterPlayerName,
      subMin: "",
      showError: false,
    };
  }
  
  render() {
    let {
        cardTitle,
        cardType,
        cardPlayers,
        playersCompleted,
        substitutePlayers,
        confirmationDone,
      } = this.props,
      cardEmptyText = cardType === window.consts.cardType.lineup ? window.translations.lineupEmptyText : window.translations.substitutesEmptyText,
      teamName = window.consts.DEFAULTS.team;

    let cardContainerScroll =
      cardType === window.consts.cardType.allplayers && confirmationDone
        ? { overflowY: "hidden", overflowX: "hidden" }
        : { overflowY: "scroll", overflowX: "hidden" };

    return (
      <>
        <Card
          style={{
            height: "560px",
            borderRadius: 8,
            width: "346px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <Card.Body>
            <Card.Title hidden={cardType === window.consts.cardType.allplayers && confirmationDone}>
              {cardTitle}
            </Card.Title>
            <Container
              style={{
                maxHeight: "500px",
                minHeight: "500px",
                ...cardContainerScroll,
              }}
            >
              {confirmationDone && cardType === window.consts.cardType.allplayers ? (
                <>
                  <TeamNameWrapper>
                    <img
                      width={64}
                      height={64}
                      className="mr-2"
                      src="./assets/teamLogo/teamLogo@3x.png"
                      alt="teamLogo"
                    />
                    <br />
                    <span>{teamName}</span>
                  </TeamNameWrapper>
                </>
              ) : cardPlayers.length > 0 ? (
                <div>
                  {cardPlayers.map((player) => {
                    return (
                      <PlayerCard
                        cardType={cardType}
                        key={player.id}
                        player={player}
                      />
                    );
                  })}
                </div>
              ) : cardType === window.consts.cardType.allplayers ? (
                <EmptyTextWrapper>{ window.translations.loadingMsg}</EmptyTextWrapper>
              ) : playersCompleted ? (
                <Button
                  hidden={confirmationDone}
                  style={{ fontSize: 13, color: "#12c990" }}
                  variant="link"
                  onClick={() => ctrl.handleModalOpen(this)}
                >
                  + Add Substitues
                </Button>
              ) : (
                <EmptyTextWrapper>{cardEmptyText}</EmptyTextWrapper>
              )}
              {cardType === window.consts.cardType.substitutes && cardPlayers.length > 0 ? (
                <Button
                  hidden={confirmationDone}
                  disabled={substitutePlayers.length > 2}
                  style={{ fontSize: 13, color: "#12c990" }}
                  onClick={() => ctrl.handleModalOpen(this)}
                  variant="link"
                >
                  + Add Substitution
                </Button>
              ) : (
                ""
              )}
            </Container>
          </Card.Body>
        </Card>
        <SubstituteModal
          addSubPlayerModal={this.state.addSubPlayerModal}
          modalClose={() => ctrl.handleModalClose(this)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  substitutePlayers: state.substitutePlayers,
  playersCompleted: state.playersCompleted,
  confirmationDone: state.confirmationDone,
});

export default connect(mapStateToProps)(TeamCard);
