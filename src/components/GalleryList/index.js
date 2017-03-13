import React, {
  Component,
  PropTypes,
} from 'react'
import {
  View,
  ListView,
  StyleSheet
} from 'react-native'
import { gridify } from '@lib/gridifyArray'
import GalleryCell from '@components/GalleryCell'

export default class VideoGallery extends Component {

  static defaultProps = {
    videos: []
  }

  static propTypes = {
    videos: PropTypes.array
  }

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      ds: ds.cloneWithRows(gridify(props.videos))
    }

    this._renderRow = this._renderRow.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ds: this.state.ds.cloneWithRows(gridify(newProps.videos))
    })
  }

  _renderRow(videoArray, sectionId, rowId) {
    return (
      <GalleryCell
        videoArray={videoArray}
        listIndex={parseInt(rowId, 10)}
      />
    )
  }

  _renderSeparator(data, sectionId, rowId) {
    return (
      <View
        key={sectionId}
        style={styles.separator}
      />
    )
  }
  render() {
    const {
      ds
    } = this.state
    return (
      <ListView
        contentContainerStyle={styles.contentContainerStyle}
        enableEmptySections
        style={styles.list}
        dataSource={ds}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    )
  }

}

const styles = StyleSheet.create({
  list: {
    flex: 1
  },
  contentContainerStyle: {
    marginRight: 10,
    marginLeft: 10
  },
  separator: {
    height: 10
  }
})
