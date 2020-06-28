import React, { Component } from "react";
import TeamCard from "../../components/TeamCard/TeamCard";
import { TeamCardContainerWrapper } from "../../styles";
import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchPlayers } from "../../actions/middleware/playersList.js";

class TeamCardsContainer extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchPlayers());
  };

  render() {
    let { allPlayers, lineupPlayers, substitutePlayers } = this.props;
    return (
      <TeamCardContainerWrapper>
        <Row style={{ height: "100%" }}>
          <Col>
            <TeamCard
              cardType="allplayers"
              cardTitle="All Players"
              cardPlayers={allPlayers}
            />
          </Col>
          <Col>
            <TeamCard
              cardType="lineup"
              cardTitle="Lineup"
              cardPlayers={lineupPlayers}
            />
          </Col>
          <Col>
            <TeamCard
              cardType="substitutes"
              cardTitle="Substitutes"
              cardPlayers={substitutePlayers}
            />
          </Col>
        </Row>
      </TeamCardContainerWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  allPlayers: state.allPlayers,
  lineupPlayers: state.lineupPlayers,
  substitutePlayers: state.substitutePlayers,
  loading: state.loading,
});

export default connect(mapStateToProps)(TeamCardsContainer);
