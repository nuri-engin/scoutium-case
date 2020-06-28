import React from "react";
import { ErrorMsgWrapper } from "../../styles";

export const SubstituteModalCtrl = {
    handleInPlayerChange: (e, scope) => {
        let value = e.target.value,
            outPlayerValue = scope.state.outPlayer;
        if (
            value !== window.translations.enterPlayerName&&
            outPlayerValue !== window.translations.enterPlayerName
        ) {
            scope.setState({ showError: false });
        }
        scope.setState({ inPlayer: value });
    },
    
    handleOutPlayerChange: (e, scope) => {
        let value = e.target.value,
            inPlayerValue = scope.state.inPlayer;
        if (
            value !== window.translations.enterPlayerName &&
            inPlayerValue !== window.translations.enterPlayerName
        ) {
            scope.setState({ showError: false });
        }
        scope.setState({ outPlayer: e.target.value });
    },
    
    handleSubMinChange: (e, scope) => {
        scope.setState({ subMin: e.target.value });
    },
    
    addSubPlayer: (e, scope) => {
        e.preventDefault();
        let { inPlayer, outPlayer, subMin } = scope.state,
            { allPlayers, lineupPlayers } = scope.props;
        
        if (
            inPlayer === window.translations.enterPlayerName ||
            outPlayer === window.translations.enterPlayerName
        ) {
            scope.setState({ showError: true });
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
        
        scope.props.updateLineupPlayerSubMin(newOutPlayer.id, subMin);
        scope.props.addSubstitutePlayer(newInPlayer);
        scope.props.modalClose();
        scope.setState({
            inPlayer: window.translations.enterPlayerName,
            outPlayer: window.translations.enterPlayerName,
            subMin: "",
        });
    },
    
    showErrorMsg: function(){
        return (
            <ErrorMsgWrapper>
                <img
                    style={{ marginTop: -1 }}
                    className="mr-2"
                    src="./assets/error.png"
                    alt="error"
                />
                {window.translations.pleaseCompleteTheForm}
            </ErrorMsgWrapper>
        );
    }
};
