import { Actions } from 'react-native-router-flux'
import { station as t } from './types'
import {
  getAllVideos,
} from '../utils/youtubeAPI'
import {
  addVideo,
  registerStation,
  createStation
} from '../utils/firebase'

export function initStation() {
  return (dispatch) => {
    createStation()
      .then(station => {
        dispatch({
          type: t.SET_STATION,
          payload: station,
        })
        registerStation(station)
      })
      .then(() => dispatch(fetchVideos()))
    }
}

export function stationCreate() {
  return (dispatch) => {
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createStation()
      .then(station => dispatch({
        type: t.CREATE_STATION_SUCCESS,
        payload: station,
      }))
      .catch(error => dispatch({
        type: t.CREATE_STATION_FAILURE,
        payload: error,
        error: true,
      }))
      .then(() => Actions.station({ host: true }))
  }
}

export function fetchVideos() {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.FETCH_VIDEOS_REQUEST,
    })
    getAllVideos(id)
      .then(videos => dispatch({
        type: t.FETCH_VIDEOS_SUCCESS,
        payload: videos,
      }))
      .catch(error => dispatch({
        type: t.FETCH_VIDEOS_FAILURE,
        payload: error,
        error: true,
      }))
  }
}

export function videoAdded(video) {
  return (dispatch, getState) => {
    const { station: { id } } = getState()
    dispatch({
      type: t.ADD_VIDEO_REQUEST,
    })
    addVideo(id, video)
      .then(() => dispatch({
        type: t.ADD_VIDEO_SUCCESS,
      }))
      .catch(error => dispatch({
        type: t.ADD_VIDEO_FAILURE,
        payload: error,
        error: true,
      }))
      .then(() => Actions.pop())
  }
}
