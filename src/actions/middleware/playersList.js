import axios from "axios";

export const SET_PLAYERS_DATA = "SET_PLAYERS_DATA";

export const setPlayersData = (players) => ({
  type: SET_PLAYERS_DATA,
  payload: { players },
});

export function fetchPlayers() {
  return (dispatch) => {
    return axios
      .get(`https://api.scoutium.com/api/clubs/4029/players?count=100`)
      .then(({ data }) => {
        dispatch(setPlayersData(data.players));
      });
  };
}
