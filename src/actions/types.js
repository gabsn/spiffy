export const login = {
  USER_LOGGED_IN: 'USER_LOGGED_IN',
}

export const listStations = {
  FETCH_STATIONS_REQUEST: 'FETCH_STATIONS_REQUEST',
  FETCH_STATIONS_SUCCESS: 'FETCH_STATIONS_SUCCESS',
  FETCH_STATIONS_FAILURE: 'FETCH_STATIONS_FAILURE',
}

export const station = {
  OPEN_STATION: 'OPEN_STATION',
  CREATE_STATION_REQUEST: 'CREATE_STATION_REQUEST',
  CREATE_STATION_SUCCESS: 'CREATE_STATION_SUCCESS',
  CREATE_STATION_FAILURE: 'CREATE_STATION_FAILURE',
  FETCH_VIDEOS_REQUEST: 'STATION_FETCH_VIDEOS_REQUEST',
  FETCH_VIDEOS_SUCCESS: 'STATION_FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS_FAILURE: 'STATION_FETCH_VIDEOS_FAILURE',
  ADD_VIDEO_REQUEST: 'ADD_VIDEO_REQUEST',
  ADD_VIDEO_SUCCESS: 'ADD_VIDEO_SUCCESS',
  ADD_VIDEO_FAILURE: 'ADD_VIDEO_FAILURE',
  SET_VIDEO_PLAYED: 'SET_VIDEO_PLAYED',
  NEXT_SONG: 'NEXT_SONG',
  VIDEO_LIKED: 'VIDEO_LIKED',
  YT_PLAYER_READY: 'YT_PLAYER_READY',
}

export const search = {
  KEYWORD_CHANGED: 'KEYWORD_CHANGED',
  FETCH_VIDEOS_REQUEST: 'SEARCH_FETCH_VIDEOS_REQUEST',
  FETCH_VIDEOS_SUCCESS: 'SEARCH_FETCH_VIDEOS_SUCCESS',
  FETCH_VIDEOS_FAILURE: 'SEARCH_FETCH_VIDEOS_FAILURE',
  ITEM_SELECTED: 'ITEM_SELECTED',
  SEARCH_RESET: 'SEARCH_RESET',
}
