import {
  ADD_LINEUP_PLAYER,
  REMOVE_LINEUP_PLAYER,
  TOGGLE_PLAYERS_COMPLETED,
  ADD_SUBSTITUTES_PLAYER,
  UPDATE_LINEUP_PLAYER_SUBMIN,
  HANDLE_CONFIRMATION_DONE,
  REMOVE_FROM_ALLPLAYER,
  ADD_TO_ALLPLAYER,
} from "../actions/playersActiontypes.js";
import { SET_PLAYERS_DATA } from "../actions/middleware/playersList.js";

const initState = {
  allPlayers: [],
  lineupPlayers: [],
  substitutePlayers: [],
  playersCompleted: false,
  confirmationDone: false,
  loading: false,
};

export const rootReducer = (state = initState, action) => {
  let lineupPlayers, allPlayers;
  switch (action.type) {
    case SET_PLAYERS_DATA:
      return {
        ...state,
        loading: false,
        allPlayers: action.payload.players,
      };
    case ADD_TO_ALLPLAYER:
      return {
        ...state,
        allPlayers: [action.payload, ...state.allPlayers],
      };
    case ADD_LINEUP_PLAYER:
      return {
        ...state,
        lineupPlayers: [...state.lineupPlayers, action.payload],
      };
    case ADD_SUBSTITUTES_PLAYER:
      return {
        ...state,
        substitutePlayers: [...state.substitutePlayers, action.payload],
      };
    case REMOVE_LINEUP_PLAYER:
      lineupPlayers = state.lineupPlayers.filter((lineupPlayer) => {
        return lineupPlayer.id !== action.payload;
      });
      return {
        ...state,
        lineupPlayers,
      };
    case REMOVE_FROM_ALLPLAYER:
      allPlayers = state.allPlayers.filter((player) => {
        return player.id !== action.payload;
      });
      return {
        ...state,
        allPlayers,
      };
    case UPDATE_LINEUP_PLAYER_SUBMIN:
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
    case TOGGLE_PLAYERS_COMPLETED:
      return {
        ...state,
        playersCompleted: action.payload,
      };
    case HANDLE_CONFIRMATION_DONE:
      return {
        ...state,
        confirmationDone: true,
      };
    default:
      return state;
  }
};
