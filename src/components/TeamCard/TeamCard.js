import React, { Component } from "react";
import { Card, Container, Button } from "react-bootstrap";
import PlayerCard from "../Player/PlayerCard";
import { EmptyTextWrapper, TeamNameWrapper } from "../../styles";
import { connect } from "react-redux";
import AddSubstituteModal from "../Modals/AddSubstituteModal.js";

const defaultTexts = {
  ENTER_PLAYER_NAME: "Enter player name",
};

class TeamCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addSubPlayerModal: false,
      inPlayer: defaultTexts.ENTER_PLAYER_NAME,
      outPlayer: defaultTexts.ENTER_PLAYER_NAME,
      subMin: "",
      showError: false,
    };
  }
  handleModalClose = () => {
    this.setState({ addSubPlayerModal: false });
    this.setState({
      inPlayer: defaultTexts.ENTER_PLAYER_NAME,
      outPlayer: defaultTexts.ENTER_PLAYER_NAME,
      subMin: "",
    });
  };
  handleModalOpen = () => {
    this.setState({ addSubPlayerModal: true });
  };
  render() {
    let {
        cardTitle,
        cardType,
        cardPlayers,
        playersCompleted,
        substitutePlayers,
        confirmationDone,
      } = this.props,
      lineupEmptyText = "You haven’t selected any player for lineup yet",
      substitutesEmptyText =
        "Please pick 11 players for lineup before creating any substitutions",
      cardEmptyText =
        cardType === "lineup" ? lineupEmptyText : substitutesEmptyText,
      loadingMsg = "Loading Players ...",
      teamName = "Beşiktaş JK";

    let cardContainerScroll =
      cardType === "allplayers" && confirmationDone
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
            <Card.Title hidden={cardType === "allplayers" && confirmationDone}>
              {cardTitle}
            </Card.Title>
            <Container
              style={{
                maxHeight: "500px",
                minHeight: "500px",
                ...cardContainerScroll,
              }}
            >
              {confirmationDone && cardType === "allplayers" ? (
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
              ) : cardType === "allplayers" ? (
                <EmptyTextWrapper>{loadingMsg}</EmptyTextWrapper>
              ) : playersCompleted ? (
                <Button
                  hidden={confirmationDone}
                  style={{ fontSize: 13, color: "#12c990" }}
                  variant="link"
                  onClick={this.handleModalOpen}
                >
                  + Add Substitues
                </Button>
              ) : (
                <EmptyTextWrapper>{cardEmptyText}</EmptyTextWrapper>
              )}
              {cardType === "substitutes" && cardPlayers.length > 0 ? (
                <Button
                  hidden={confirmationDone}
                  disabled={substitutePlayers.length > 2}
                  style={{ fontSize: 13, color: "#12c990" }}
                  onClick={this.handleModalOpen}
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
        <AddSubstituteModal
          addSubPlayerModal={this.state.addSubPlayerModal}
          modalClose={this.handleModalClose}
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
