import React, {
  Component,
  PropTypes,
} from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import CommentsIcon from '@components/CommentsIcon'
import LikeIcon from '@components/LikeIcon'
import { START } from '@lib/gridifyArray'

export default class GalleryCard extends Component {

  static defaultProps = {
    likesCount: 0,
    commentsCount: 0,
    hasLiked: false
  }

  static propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    likesCount: PropTypes.number,
    commentsCount: PropTypes.number,
    imagePosition: PropTypes.number,
    hasLiked: PropTypes.bool,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {
      imageUrl,
      title,
      description,
      likesCount,
      commentsCount,
      imagePosition,
      hasLiked,
    } = this.props


    const imageElement = (
      <View
        style={styles.imageContainer}
      >
        <Image
          source={{ uri: imageUrl}}
          style={styles.image}
          resizeMode={Image.resizeMode.cover}
        />
      </View>
    )

    const textElement = (
      <View style={styles.textContainer}>
        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          style={styles.description}
          numberOfLines={4}
        >
          {description}
        </Text>
        <View style={styles.iconRow}>
          <View style={styles.iconGroup}>
            <CommentsIcon />
            <Text style={styles.iconNumber}>
              {commentsCount}
            </Text>
          </View>
          <View style={styles.iconGroup}>
            <LikeIcon hasLiked={hasLiked}/>
            <Text style={styles.iconNumber}>
              {likesCount}
            </Text>
          </View>
        </View>
      </View>
    )
    return (
      <View style={styles.container}>
        {imagePosition === START ? imageElement : textElement}
        {imagePosition === START ? textElement : imageElement}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainer: {
    flex: 0.65,
    overflow: 'hidden',
  },
  textContainer: {
    flex: 0.35,
    padding: 6,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 12,
  },
  description: {
    color: 'white',
    fontSize: 10,
    flex: 1,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  iconNumber: {
    color: 'white',
    fontSize: 10,
    marginLeft: 4,
    fontWeight: 'bold',
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    flex: 1,
  }
})
