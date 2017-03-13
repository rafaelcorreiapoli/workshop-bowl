import React, {
  Component,
  PropTypes,
} from 'react'
import {
  View,
  ListView,
  StyleSheet
} from 'react-native'
import { gridify, getDirection } from '@lib/gridifyArray'
import GalleryCard from '@components/GalleryCard'
import GalleryCardVertical from '@components/GalleryCardVertical'

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

  _renderRow(videoArray, sectionId, i) {
    const containerStyle = {
      flex: 1,
      height: videoArray.length === 1 ? 120 : 160,
      flexDirection: 'row'
    }

    return (
      <View style={containerStyle}>
        {
          videoArray.map((video, j) => {
            const imagePosition = getDirection(i, j)
            const horizontal = videoArray.length === 1

            if (horizontal) {
              return (
                <GalleryCard
                  key={j}
                  imagePosition={imagePosition}
                  {...video}
                />
              )
            }

            const cardStyle = j === 0
            ? {marginRight: 5}
            : { marginLeft: 5 }

            return (
              <GalleryCardVertical
                key={j}
                imagePosition={imagePosition}
                {...video}
                style={cardStyle}
              />
            )
          })
        }
      </View>
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
