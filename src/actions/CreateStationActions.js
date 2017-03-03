import { createStation as t } from './Types'
import { createPlaylist } from '../utils/YoutubeApi'
import { Actions } from 'react-native-router-flux'

export function titleChanged(title) {
  return {
    type: t.TITLE_CHANGED,
    payload: title,
  }
}

export function stationCreated(title) {
  return (dispatch) => {
    dispatch({
      type: t.CREATE_STATION_REQUEST,
    })
    createPlaylist(title)
      .then(response => dispatch({
        type: t.CREATE_STATION_SUCCESS,
        payload: response,
      }))
      .catch(error => dispatch({
        type: t.CREATE_STATION_FAILURE,
        payload: error,
        error: true,
      }))
      .then(() => Actions.station())
  }
}
