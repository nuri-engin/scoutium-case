import React from "react";
import { ErrorMsgWrapper } from "../../styles";

export const SubstituteModalCtrl = {
    handleSubMinChange: (e, scope) => scope.setState({ subMin: e.target.value }),
    
    handlePlayerChange: (e, scope, stateValue) => {
        let value = e.target.value;
        
        if (
            value !== window.translations.enterPlayerName &&
            stateValue !== window.translations.enterPlayerName
        ) {
            scope.setState({ showError: false });
        }
        
        scope.setState({ [e.target.name]: value });
    },
    
    addSubPlayer: (e, scope) => {
        e.preventDefault();
        
        let { inPlayer, outPlayer, subMin } = scope.state,
            { allPlayers, lineupPlayers } = scope.props;
        
        if (
            inPlayer === window.translations.enterPlayerName ||
            outPlayer === window.translations.enterPlayerName
        ) {
            return scope.setState({ showError: true });
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
        scope.props.removeFromAllPlayer(newInPlayer.id);
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
