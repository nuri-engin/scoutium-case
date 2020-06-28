import React, { Component } from "react";
import { Media, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import {
  addLineupPlayerAction,
  removeLineupPlayerAction,
  togglePlayersCompleted,
  removeFromAllPlayer,
  addToAllPlayers,
} from "../../actions/playersActiontypes.js";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

class PlayerCard extends Component {
  addPlayer = (player) => {
    let { lineupPlayers } = this.props;
    if (lineupPlayers.length <= 11) {
      this.props.addLineupPlayerAction(player);
      this.props.removeFromAllPlayer(player.id);
    }
    lineupPlayers.length === 10 && this.props.togglePlayersCompleted(true);
  };

  removePlayer = (playerID, player) => {
    this.props.removeLineupPlayerAction(playerID);
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
      subMinType =
        cardType === "lineup" ? `⬇${subMinDuration}'` : `⬆${subMinDuration}'`,
      subMinValue = subMinDuration ? subMinType : "";
    return (
      <Media style={{ marginTop: 12 }}>
        <img
          style={{ marginTop: 8, bordßrRadius: "20%" }}
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
