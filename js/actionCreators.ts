import {
  REMOVE_ALL_TRACKS,
  PLAY_TRACK,
  ADD_TRACK_FROM_URI,
  S_UPDATE_PLAYER_OBJECT,
  GO_PREVIOUS_STATE
} from "./actionTypes";

import { getTrackInfos, getTracksFromAlbum } from "./SpotifyApiFunctions";
import { Action, Dispatch } from "redux";
import { AppState } from "./reducers";

export function goPreviousState(explorerId: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({ type: GO_PREVIOUS_STATE, id: explorerId });
  };
}

// TODO: Type of p to be defined
export function createPlayerObject(p: any) {
  const player = p;
  const id = player._options.id;
  const getOAuthToken = player._options.getOAuthToken;
  const timeMode = "ELAPSED";
  const volume = player._options.volume * 100;
  const name = player._options.name;
  const timeElapsed = 0;
  const balance = 0;
  const channels = null;
  const shuffle = false;
  const repeat = false;
  const status = "STOPPED";
  return {
    type: S_UPDATE_PLAYER_OBJECT,
    player: player,
    id: id,
    getOAuthToken: getOAuthToken,
    timeMode: timeMode,
    volume: volume,
    name: name,
    timeElapsed: timeElapsed,
    length: length,
    balance: balance,
    channels: channels,
    shuffle: shuffle,
    repeat: repeat,
    status: status
  };
}
