import {ACTIONTYPES} from "./typeNames";

export const addLineupPlayer = (player) => ({
  type: ACTIONTYPES.ADD_LINEUP_PLAYER,
  payload: player,
});

export const addSubstitutePlayer = (player) => ({
  type: ACTIONTYPES.ADD_SUBSTITUTES_PLAYER,
  payload: player,
});

export const togglePlayersCompleted = (value) => ({
  type: ACTIONTYPES.TOGGLE_PLAYERS_COMPLETED,
  payload: value,
});

export const handleConfirmationDone = () => ({
  type: ACTIONTYPES.HANDLE_CONFIRMATION_DONE,
});

export const updateLineupPlayerSubMin = (playerID, submin) => ({
  type: ACTIONTYPES.UPDATE_LINEUP_PLAYER_SUBMIN,
  payload: {
    playerID,
    submin,
  },
});

export const removeLineupPlayer = (playerID) => ({
  type: ACTIONTYPES.REMOVE_LINEUP_PLAYER,
  payload: playerID,
});

export const removeFromAllPlayer = (playerID) => ({
  type: ACTIONTYPES.REMOVE_FROM_ALLPLAYER,
  payload: playerID,
});

export const addToAllPlayers = (player) => ({
  type: ACTIONTYPES.ADD_TO_ALLPLAYER,
  payload: player,
});
