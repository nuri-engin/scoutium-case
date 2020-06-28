import React, { Component } from "react";
import { Media, Button, Modal, Row, Col } from "react-bootstrap";
import "./PlayerCard.css";
import { connect } from "react-redux";
import {
  addLineupPlayerAction,
  removeLineupPlayerAction,
  togglePlayersCompleted,
  removeFromAllPlayer,
  addToAllPlayers,
} from "../../actions/types.js";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

class PlayerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
    };
  }
  handleModalClose = () => {
    this.setState({ modalShow: false });
  };
  addPlayer = (player) => {
    let { lineupPlayers } = this.props,
      samePlayer = lineupPlayers.find(
        (lineupplayer) => lineupplayer.id === player.id
      );
    if (lineupPlayers.length <= 11) {
      if (samePlayer) {
        this.setState({ modalShow: true });
      } else {
        this.props.addLineupPlayerAction(player);
        this.props.removeFromAllPlayer(player.id);
      }
    }
    lineupPlayers.length === 10 && this.props.togglePlayersCompleted(true);
  };
  removePlayer = (playerID, player) => {
    this.props.removeLineupPlayerAction(playerID);
    debugger;
    this.props.addToAllPlayers(player);
    this.props.togglePlayersCompleted(false);
  };
  render() {
    let { player, cardType, playersCompleted, confirmationDone } = this.props,
      { display_name, image_url, position, subMinDuration } = player;

    let buttonName =
      cardType === "allplayers" ? (
        <div>
          <TiTick style={{ marginTop: -3 }} />
          PICK
        </div>
      ) : (
        <MdDelete style={{ fontSize: 13, color: "#9c9d9e" }} />
      );

    let defineOnClickMethod =
      cardType === "allplayers"
        ? () => this.addPlayer(player)
        : () => this.removePlayer(player.id, player);

    let subMinColor =
        cardType === "lineup" ? { color: "#e63846" } : { color: "#12c990" },
      defineMin =
        cardType === "lineup" ? `⬇${subMinDuration}'` : `⬆${subMinDuration}'`,
      subMinValue = subMinDuration ? defineMin : "";
    return (
      <>
        <Media style={{ marginTop: 12 }}>
          <img
            style={{ marginTop: 8, borderRadius: "20%" }}
            width={34}
            height={34}
            className="mr-2"
            src={image_url}
            alt="player"
          />
          <Media.Body>
            <span
              style={{
                fontSize: 15,
                lineHeight: 1.19,
                fontWeight: "normal",
                color: "#02063f",
              }}
            >
              {display_name}
            </span>
            <br />
            <div style={{ fontSize: 12, color: "#4D6385" }}>
              {position ? position.name : "undefined"}
            </div>
          </Media.Body>
          <div>
            <div style={{ fontSize: 13, ...subMinColor }}>
              {cardType !== "allplayers" && subMinValue}
            </div>
            <Row>
              <Col>
                {cardType !== "substitutes" ? (
                  <Button
                    hidden={confirmationDone}
                    disabled={cardType === "allplayers" && playersCompleted}
                    onClick={defineOnClickMethod}
                    style={{ fontSize: 11, textDecoration: "none" }}
                    variant="link"
                  >
                    {buttonName}
                  </Button>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </div>
        </Media>
        {/*Warning for user to not choose similar players*/}
        <Modal
          size="sm"
          show={this.state.modalShow}
          onHide={this.handleModalClose}
          animation={false}
        >
          <Modal.Body>
            Player already exists in Lineup !<br />
            Please choose another player
          </Modal.Body>
          <Button size="sm" onClick={this.handleModalClose} variant="warning">
            OK
          </Button>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addLineupPlayerAction: (player) => dispatch(addLineupPlayerAction(player)),
  removeLineupPlayerAction: (playerID) =>
    dispatch(removeLineupPlayerAction(playerID)),
  togglePlayersCompleted: (value) => dispatch(togglePlayersCompleted(value)),
  removeFromAllPlayer: (playerID) => dispatch(removeFromAllPlayer(playerID)),
  addToAllPlayers: (player) => dispatch(addToAllPlayers(player)),
});

const mapStateToProps = (state) => ({
  lineupPlayers: state.lineupPlayers,
  playersCompleted: state.playersCompleted,
  confirmationDone: state.confirmationDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);
