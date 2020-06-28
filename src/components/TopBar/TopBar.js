import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { handleConfirmationDone } from "../../actions/types.js";
import styled from "styled-components";
import "./TopBar.css";

let ConfirmMsgWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ##02063f;
  font-weight: normal;
  font-size: 24px;
`;

class TopBar extends Component {
  handleConfirmation = () => {
    this.props.handleConfirmationDone();
  };
  render() {
    let { playersCompleted, confirmationDone } = this.props;

    return (
      <>
        {confirmationDone ? (
          <ConfirmMsgWrapper>
            <img
              style={{ marginTop: 4, borderRadius: 1 }}
              width={40}
              height={40}
              className="mr-2"
              src="./assets/done@2x.png"
              alt="done"
            />
            Squad saved successfully
          </ConfirmMsgWrapper>
        ) : (
          <Navbar>
            <img
              style={{ marginTop: 4, borderRadius: 1 }}
              width={40}
              height={40}
              className="mr-2"
              src="./assets/teamLogo/teamLogo@2x.png"
              alt="teamLogo"
            />
            <Navbar.Brand style={{ color: "#02063f", fontWeight: "bold" }}>
              Beşiktaş JK
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            <Button
              disabled={!playersCompleted}
              onClick={this.handleConfirmation}
              style={{
                marginTop: 6,
                backgroundColor: "#3852ff",
                width: 225,
                height: 36,
                fontSize: 12,
              }}
            >
              Confirm
            </Button>
          </Navbar>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleConfirmationDone: () => dispatch(handleConfirmationDone()),
});

const mapStateToProps = (state) => ({
  allPlayers: state.allPlayers,
  playersCompleted: state.playersCompleted,
  confirmationDone: state.confirmationDone,
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
