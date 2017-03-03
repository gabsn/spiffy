import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import VideoRow from './VideoRow'
import { updateDatasource } from '../../utils'

const propTypes = {
  videos: PropTypes.array,
}

const defaultProps = {
  videos: [],
}

class VideoList extends React.Component {
  constructor(props) {
    super(props)
    this.updateDatasource = updateDatasource.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount() {
    this.updateDatasource(this.props.videos)
  }

  componentWillReceiveProps(nextProps) {
    this.updateDatasource(nextProps.videos)
  }

  renderRow(video) {
    return (
      <VideoRow {...video} onRowPressed={() => this.props.onItemSelected(video.id)} />
    )
  }

  render() {
    return (
      <ListView
        enableEmptySections
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
})

VideoList.propTypes = propTypes
VideoList.defaultProps = defaultProps

export default VideoList