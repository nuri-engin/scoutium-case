export const PlayerCardCtrl = {
    addPlayer: (player, scope) => {
        let { lineupPlayers } = scope.props;
        
        if (lineupPlayers.length <= 11) {
            scope.props.addLineupPlayer(player);
            scope.props.removeFromAllPlayer(player.id);
        }
        
        lineupPlayers.length === 10 && scope.props.togglePlayersCompleted(true);
    },
    
    removePlayer: (player, scope) => {
        scope.props.removeLineupPlayer(player.id);
        scope.props.addToAllPlayers(player);
        scope.props.togglePlayersCompleted(false);
    }
};
