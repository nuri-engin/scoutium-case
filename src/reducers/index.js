import {ACTIONTYPES} from "../actions/typeNames";

const initState = {
  allPlayers: [],
  lineupPlayers: [],
  substitutePlayers: [],
  playersCompleted: false,
  confirmationDone: false,
  loading: false,
};

/**
 * There will be 9 main store process;
 * 1 container and 4 component handles the data process.
 *
 * # All Players component related;
 * SET_PLAYERS_DATA {@link TeamCardsContainer.componentDidMount};
 *
 * # Lineup addition/removing related.
 * ADD_TO_ALLPLAYER {@link PlayerCard.componentDidMount}
 * REMOVE_FROM_ALLPLAYER {@link PlayerCard.componentDidMount}
 * ADD_LINEUP_PLAYER {@link PlayerCard.mapDispatchToProps}
 * REMOVE_LINEUP_PLAYER {@link PlayerCard.mapDispatchToProps}
 *
 * # Substitution selection related;
 * ADD_SUBSTITUTES_PLAYER {@link SubstituteModal.mapDispatchToProps}
 * UPDATE_LINEUP_PLAYER_SUBMIN {@link SubstituteModal.mapDispatchToProps}
 *
 * # Confirmation process related;
 * TOGGLE_PLAYERS_COMPLETED {@link PlayerCard.mapDispatchToProps}
 * HANDLE_CONFIRMATION_DONE {@link TopBar.mapDispatchToProps}
 */
export const rootReducer = (state = initState, action) => {
  let lineupPlayers, allPlayers;
  
  switch (action.type) {
    case ACTIONTYPES.SET_PLAYERS_DATA:
      return {
        ...state,
        loading: false,
        allPlayers: action.payload.players,
      };
      
    case ACTIONTYPES.ADD_TO_ALLPLAYER:
      return {
        ...state,
        allPlayers: [action.payload, ...state.allPlayers],
      };
    
    case ACTIONTYPES.REMOVE_FROM_ALLPLAYER:
      allPlayers = state.allPlayers.filter((player) => {
        return player.id !== action.payload;
      });
      return {
        ...state,
        allPlayers,
      };
      
    case ACTIONTYPES.ADD_LINEUP_PLAYER:
      return {
        ...state,
        lineupPlayers: [...state.lineupPlayers, action.payload],
      };
  
    case ACTIONTYPES.REMOVE_LINEUP_PLAYER:
      lineupPlayers = state.lineupPlayers.filter((lineupPlayer) => {
        return lineupPlayer.id !== action.payload;
      });
      return {
        ...state,
        lineupPlayers,
      };
      
    case ACTIONTYPES.ADD_SUBSTITUTES_PLAYER:
      return {
        ...state,
        substitutePlayers: [...state.substitutePlayers, action.payload],
      };
      
    case ACTIONTYPES.UPDATE_LINEUP_PLAYER_SUBMIN:
      lineupPlayers = state.lineupPlayers.map((lineupplayer) => {
        if (lineupplayer.id === action.payload.playerID) {
          return { ...lineupplayer, subMinDuration: action.payload.submin };
        }
        return lineupplayer;
      });
      return {
        ...state,
        lineupPlayers,
      };
      
    case ACTIONTYPES.TOGGLE_PLAYERS_COMPLETED:
      return {
        ...state,
        playersCompleted: action.payload,
      };
      
    case ACTIONTYPES.HANDLE_CONFIRMATION_DONE:
      return {
        ...state,
        confirmationDone: true,
      };
      
    default:
      return state;
  }
};
