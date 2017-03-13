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

  static defaultProps = {}

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
    return (
      <View
        style={{
          flex: 1,
          height: videoArray.length === 1 ? 120 : 160 ,
          flexDirection: 'row'
        }}
      >
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

            return (
              <GalleryCardVertical
                key={j}
                imagePosition={imagePosition}
                {...video}
                style={j === 0 ? {
                  marginRight: 5
                } : {
                  marginLeft: 5
                }}
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
        style={{
          height: 10
        }}
      />
    )
  }
  render() {
    const {
      ds
    } = this.state
    return (
      <ListView
        contentContainerStyle={{
          marginRight: 10,
          marginLeft: 10
        }}
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
  }
})
