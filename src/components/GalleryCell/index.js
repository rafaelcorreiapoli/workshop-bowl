import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
} from 'react-native'
import GalleryCard from '@components/GalleryCard'
import GalleryCardVertical from '@components/GalleryCardVertical'
import { getDirection } from '@lib/gridifyArray'

export default class GalleryCell extends Component {

  static defaultProps = {}

  static propTypes = {
    listIndex: PropTypes.number,
    videoArray: PropTypes.array,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      videoArray,
      listIndex
    } = this.props

    const containerStyle = {
      flex: 1,
      height: videoArray.length === 1 ? 120 : 160,
      flexDirection: 'row'
    }

    return (
      <View style={containerStyle}>
        {
          videoArray.map((video, j) => {
            const imagePosition = getDirection(listIndex, j)
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

}
