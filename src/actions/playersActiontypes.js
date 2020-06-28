export const ADD_LINEUP_PLAYER = "ADD_PLAYER";
export const REMOVE_LINEUP_PLAYER = "REMOVE_LINEUP_PLAYER";
export const TOGGLE_PLAYERS_COMPLETED = "TOGGLES_PLAYER_COMPLETED";
export const ADD_SUBSTITUTES_PLAYER = "ADD_SUBSTITUTES_PLAYER";
export const UPDATE_LINEUP_PLAYER_SUBMIN = "UPDATE_LINEUP_PLAYER_SUBMIN";
export const HANDLE_CONFIRMATION_DONE = "HANDLE_CONFIRMATION_DONE";
export const REMOVE_FROM_ALLPLAYER = "REMOVE_FROM_ALLPLAYER";
export const ADD_TO_ALLPLAYER = "ADD_TO_ALLPLAYER";

export const addLineupPlayerAction = (player) => ({
  type: ADD_LINEUP_PLAYER,
  payload: player,
});

export const addSubstitutePlayer = (player) => ({
  type: ADD_SUBSTITUTES_PLAYER,
  payload: player,
});

export const togglePlayersCompleted = (value) => ({
  type: TOGGLE_PLAYERS_COMPLETED,
  payload: value,
});

export const handleConfirmationDone = () => ({
  type: HANDLE_CONFIRMATION_DONE,
});

export const updateLineupPlayerSubMin = (playerID, submin) => ({
  type: UPDATE_LINEUP_PLAYER_SUBMIN,
  payload: {
    playerID,
    submin,
  },
});

export const removeLineupPlayerAction = (playerID) => ({
  type: REMOVE_LINEUP_PLAYER,
  payload: playerID,
});

export const removeFromAllPlayer = (playerID) => ({
  type: REMOVE_FROM_ALLPLAYER,
  payload: playerID,
});

export const addToAllPlayers = (player) => ({
  type: ADD_TO_ALLPLAYER,
  payload: player,
});
