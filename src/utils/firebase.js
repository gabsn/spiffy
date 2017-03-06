import firebase from 'firebase'

export function getFirebaseUid() {
  return firebase.auth().currentUser.uid
}

export function getUserID() {
  return firebase.database().ref('users/' + getFirebaseUid()).once('value')
    .then(snapshot => snapshot.val().userID)
}

export function registerUser(user) {
  firebase.database().ref('users/' + getFirebaseUid()).set({
    userID: user.userID,
  })
}

export function registerStation(station) {
  getUserID()
    .then(userID => firebase.database().ref('stations/' + userID).set(station))
}

export function createStation() {
  return getUserID()
    .then(userID => {
      station = {
        title: userID,
        id: userID,
        channelTitle: userID,
        thumbnail: {
          height: 90,
          width: 120,
          url: 'https://i.ytimg.com/vi/S3fTw_D3l10/hqdefault.jpg',
        },
        videos: [],
      }
      firebase.database().ref('stations/' + userID).set(station)
      return station
    })
}

function getStationRef() {
  return firebase.database().ref('stations/'+stationId)
}

function getStationsRef() {
  return firebase.database().ref('stations')
}

function getVideosRef(stationId) {
  return firebase.database().ref('stations/' + stationId + '/videos')
}

export function listAllStations(callback) {
  //console.log('listAllStations')
  getStationsRef().on('value', (snapshot) => {
    var stations = []
    snapshot.forEach((snap) => {
      stations.push(snap.val())
    })
    //console.log(stations)
    callback(stations)
  })
}

export function listAllVideos(stationId, callback) {
  //console.log('listAllVideos')
  getVideosRef(stationId).on('value', (snapshot) => {
    var videos = []
    snapshot.forEach((snap) => {
      videos.push(snap.val())
    })
    if (videos) {
      //console.log(videos)
      callback(videos)
    }
  })
}

export function addVideo(stationId, video) {
  return firebase.database().ref('stations/' + stationId + '/videos/').push(video)
}

export function getStation(stationId) {
  return firebase.database().ref('stations/' + stationId).once('value')
    .then(snapshot => console.log(snapshot.val()))
}
