import {combineReducers} from 'redux';

import {ACTION_TYPE} from '../constants';


const playersReducer = (players = [], action) => {
  if (action.type === ACTION_TYPE.FETCH_PLAYERS) {
    return action.payload;
  }

  return players;
};

const isLoadingPlayersReducer = (isLoading = false, action) => {
  if (action.type === ACTION_TYPE.LOADING_PLAYERS) {
    return true;
  }

  if (action.type === ACTION_TYPE.FETCH_PLAYERS) {
    return false;
  }

  return isLoading;
}

const reducers = combineReducers({
    players: playersReducer,
    isLoadingPlayers: isLoadingPlayersReducer,
});

export default reducers;
