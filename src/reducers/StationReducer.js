import { station as t } from '../actions/types'

const INITIAL_STATE = {
  play: false,
  isReady: false,
  id: '',
  videoPlayed: '',
  channelTitle: '',
  thumbnail: {
    height: 90,
    url: '',
    width: 120,
  },
  title: '',
  videos: [],
}

function station(state = INITIAL_STATE, action) {
  switch (action.type) {
    case t.OPEN_STATION:
      return { ...state, ...action.payload }
    case t.SET_VIDEO_PLAYED:
      return { ...state, videoPlayed: action.payload, play: true }
    case t.YT_PLAYER_READY:
      return { ...state, isReady: true }
    case t.CREATE_STATION_SUCCESS:
      return { ...INITIAL_STATE, ...action.payload }
    case t.CREATE_STATION_FAILURE:
      console.log(action.payload)
      return state
    case t.FETCH_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload }
    case t.FETCH_VIDEOS_FAILURE:
      console.log(action.payload)
      return state
    default:
      return state
  }
}

export default station
