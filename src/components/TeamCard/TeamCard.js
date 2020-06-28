import React, { Component } from "react";
import {
  Card,
  Container,
  Button,
  Modal,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import PlayerCard from "../Player/PlayerCard";
import styled from "styled-components";
import "./TeamCard.css";
import { connect } from "react-redux";
import {
  addSubstitutePlayer,
  updateLineupPlayerSubMin,
} from "../../actions/types.js";

let EmptyTextWrapper = styled.span`
  font-size: 14px;
  margin-top: 230px;
  text-align: center;
  justify-content: center;
  display: flex;
  line-height: 1.21;
  letter-spacing: normal;
  color: #586f8f;
`;

let TeamNameWrapper = styled.span`
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

let ErrorMsgWrapper = styled.div`
  color: red;
  font-size: 11px;
  margin-top: 6px;
`;

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
  handleInPlayerChange = (e) => {
    let value = e.target.value,
      outPlayerValue = this.state.outPlayer;
    if (
      value !== defaultTexts.ENTER_PLAYER_NAME &&
      outPlayerValue !== defaultTexts.ENTER_PLAYER_NAME
    ) {
      this.setState({ showError: false });
    }
    this.setState({ inPlayer: value });
  };
  handleOutPlayerChange = (e) => {
    let value = e.target.value,
      inPlayerValue = this.state.inPlayer;
    if (
      value !== defaultTexts.ENTER_PLAYER_NAME &&
      inPlayerValue !== defaultTexts.ENTER_PLAYER_NAME
    ) {
      this.setState({ showError: false });
    }
    this.setState({ outPlayer: e.target.value });
  };
  handleSubMinChange = (e) => {
    this.setState({ subMin: e.target.value });
  };
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
  addSubPlayer = (e) => {
    e.preventDefault();
    let { inPlayer, outPlayer, subMin } = this.state,
      { allPlayers, lineupPlayers } = this.props;

    if (
      inPlayer === defaultTexts.ENTER_PLAYER_NAME ||
      outPlayer === defaultTexts.ENTER_PLAYER_NAME
    ) {
      this.setState({ showError: true });
      return;
    }

    let newInPlayer = allPlayers.find(
        (player) => player.display_name === inPlayer
      ),
      newOutPlayer = lineupPlayers.find(
        (player) => player.display_name === outPlayer
      );

    allPlayers.forEach((player) => {
      player.display_name === inPlayer && (player.subMinDuration = subMin);
    });

    this.props.updateLineupPlayerSubMin(newOutPlayer.id, subMin);
    this.props.addSubstitutePlayer(newInPlayer);
    this.handleModalClose();
    this.setState({
      inPlayer: defaultTexts.ENTER_PLAYER_NAME,
      outPlayer: defaultTexts.ENTER_PLAYER_NAME,
      subMin: "",
    });
  };

  showErrorMsg = () => {
    return (
      <ErrorMsgWrapper>
        <img
          style={{ marginTop: -1 }}
          className="mr-2"
          src="./assets/error.png"
          alt="error"
        />
        Please complete the form .
      </ErrorMsgWrapper>
    );
  };

  render() {
    let {
        cardTitle,
        cardType,
        cardPlayers,
        playersCompleted,
        allPlayers,
        lineupPlayers,
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

    return (
      <>
        <Card
          style={{
            height: "560px",
            borderRadius: 8,
            overflow: "hidden",
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
                overflowY: "auto",
                overflow: "scroll",
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
        {/** ----------------------- MODAL ------------------- */}
        <Modal
          size="sm"
          animation={false}
          show={this.state.addSubPlayerModal}
          onHide={this.handleModalClose}
          centered
        >
          <Modal.Body>
            <span style={{ color: "#02063f", fontSize: 16 }}>
              Add Substition
            </span>
            <Form onSubmit={this.addSubPlayer}>
              <Form.Group controlId="outPlayer">
                <Form.Label style={{ color: "#586f8f", fontSize: 12 }}>
                  OUT PLAYER
                </Form.Label>
                <Form.Control
                  required
                  onChange={this.handleOutPlayerChange}
                  value={this.state.outPlayer}
                  as="select"
                >
                  <option disabled value={defaultTexts.ENTER_PLAYER_NAME}>
                    Enter player name
                  </option>
                  {lineupPlayers.map((player) => {
                    return (
                      <option key={player.id}>{player.display_name}</option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="inPlayer">
                <Form.Label style={{ color: "#586f8f", fontSize: 12 }}>
                  IN PLAYER
                </Form.Label>
                <Form.Control
                  required
                  onChange={this.handleInPlayerChange}
                  value={this.state.inPlayer}
                  as="select"
                >
                  <option disabled value={defaultTexts.ENTER_PLAYER_NAME}>
                    Enter player name
                  </option>
                  {allPlayers.map((player) => {
                    return (
                      <option key={player.id}>{player.display_name}</option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="substitutionMin">
                <Form.Label>
                  <span style={{ color: "#586f8f", fontSize: 12 }}>
                    SUBSTITUTION MINUTE
                  </span>
                </Form.Label>
                <Form.Control
                  required
                  onChange={this.handleSubMinChange}
                  value={this.state.subMin}
                  type="number"
                  min="1"
                  placeholder="Enter minute of substitution"
                />
              </Form.Group>
              <Form.Group as={Row}>
                <Col sm={{ span: 20, offset: 4 }}>
                  <Button
                    onClick={this.handleModalClose}
                    size="sm"
                    style={{
                      height: 29,
                      fontSize: 11,
                      color: "#e63846",
                      backgroundColor: "transparent",
                      border: "none",
                      marginRight: 5,
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    type="submit"
                    style={{
                      width: 126,
                      height: 29,
                      fontSize: 11,
                      color: "#ffffff",
                      backgroundColor: "#3852ff",
                    }}
                  >
                    Add
                  </Button>
                </Col>
              </Form.Group>
              {this.state.showError && this.showErrorMsg()}
            </Form>
          </Modal.Body>
        </Modal>
        {/** ----------------------- MODAL ------------------- */}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSubstitutePlayer: (player) => dispatch(addSubstitutePlayer(player)),
  updateLineupPlayerSubMin: (player, submin) =>
    dispatch(updateLineupPlayerSubMin(player, submin)),
});

const mapStateToProps = (state) => ({
  allPlayers: state.allPlayers,
  lineupPlayers: state.lineupPlayers,
  substitutePlayers: state.substitutePlayers,
  playersCompleted: state.playersCompleted,
  confirmationDone: state.confirmationDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamCard);
