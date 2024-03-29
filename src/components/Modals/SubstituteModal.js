import React, { Component } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import {
  addSubstitutePlayer,
  removeFromAllPlayer,
  updateLineupPlayerSubMin,
} from "../../actions/playersActiontypes.js";
import { connect } from "react-redux";
import { SubstituteModalCtrl as ctrl} from "./SubstituteModalCtrl";

class SubstituteModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inPlayer: window.translations.enterPlayerName,
      outPlayer: window.translations.enterPlayerName,
      subMin: "",
      showError: false,
    };
  }

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
          <span style={{ color: "#02063f", fontSize: 16 }}>{window.translations.addSubstition}</span>
          <Form onSubmit={(e) => ctrl.addSubPlayer(e, this)}>
            <Form.Group controlId="outPlayer">
              <Form.Label style={{ color: "#586f8f", fontSize: 12 }}>
                {window.translations.outPlayer}
              </Form.Label>
              <Form.Control
                required
                name = {window.consts.inputNames.outPlayer}
                onChange={(e) => ctrl.handlePlayerChange(e, this, this.state.inPlayer)}
                value={this.state.outPlayer}
                as="select"
              >
                <option disabled value={window.translations.enterPlayerName}>
                  {window.translations.enterPlayerName}
                </option>
                {lineupPlayers.map((player) => {
                  return <option key={player.id}>{player.display_name}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="inPlayer">
              <Form.Label style={{ color: "#586f8f", fontSize: 12 }}>
                {window.translations.inPlayer}
              </Form.Label>
              <Form.Control
                required
                name = {window.consts.inputNames.inPlayer}
                onChange={(e) => ctrl.handlePlayerChange(e, this, this.state.outPlayer)}
                value={this.state.inPlayer}
                as="select"
              >
                <option disabled value={window.translations.enterPlayerName}>
                  {window.translations.enterPlayerName}
                </option>
                {allPlayers.map((player) => {
                  return <option key={player.id}>{player.display_name}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="substitutionMin">
              <Form.Label>
                <span style={{ color: "#586f8f", fontSize: 12 }}>
                  {window.translations.substitutionMinute}
                </span>
              </Form.Label>
              <Form.Control
                required
                onChange={(e) => ctrl.handleSubMinChange(e, this)}
                value={this.state.subMin}
                type="number"
                min="1"
                placeholder={window.translations.enterMinuteOfSubstitution}
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
                  {window.translations.cancel}
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
                  {window.translations.add}
                </Button>
              </Col>
            </Form.Group>
            {this.state.showError && ctrl.showErrorMsg()}
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addSubstitutePlayer: (player) => dispatch(addSubstitutePlayer(player)),
  removeFromAllPlayer: (playerID) => dispatch(removeFromAllPlayer(playerID)),
  updateLineupPlayerSubMin: (player, submin) =>dispatch(updateLineupPlayerSubMin(player, submin)),
});

const mapStateToProps = (state) => ({
  allPlayers: state.allPlayers,
  lineupPlayers: state.lineupPlayers,
  substitutePlayers: state.substitutePlayers,
  playersCompleted: state.playersCompleted,
  confirmationDone: state.confirmationDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(SubstituteModal);
