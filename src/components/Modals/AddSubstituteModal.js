import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import {
  addSubstitutePlayer,
  updateLineupPlayerSubMin,
} from "../../actions/playersActiontypes.js";
import { connect } from "react-redux";
import { ErrorMsgWrapper } from "../../styles";

const defaultTexts = {
  ENTER_PLAYER_NAME: "Enter player name",
};

class AddSubstituteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.modalClose();
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
      lineupPlayers,
      allPlayers,
      addSubPlayerModal,
      modalClose,
    } = this.props;
    return (
      <Modal
        size="sm"
        animation={false}
        show={addSubPlayerModal}
        onHide={modalClose}
        centered
      >
        <Modal.Body>
          <span style={{ color: "#02063f", fontSize: 16 }}>Add Substition</span>
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
                  return <option key={player.id}>{player.display_name}</option>;
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
                  return <option key={player.id}>{player.display_name}</option>;
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
                  onClick={modalClose}
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

export default connect(mapStateToProps, mapDispatchToProps)(AddSubstituteModal);
