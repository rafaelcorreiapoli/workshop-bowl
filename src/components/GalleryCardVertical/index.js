import React, {
  Component,
  PropTypes
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
      style,
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
        <View style={styles.column}>
          <Text
            style={styles.title}
            numberOfLines={2}
          >
            {title}
          </Text>
          <Text
            style={styles.description}
            numberOfLines={3}
          >
            {description}
          </Text>
        </View>

        <View style={styles.iconColumn}>
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
      <View style={[styles.container, style]}>
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    overflow: 'hidden'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
  },
  column: {
    flex: 1,
    flexDirection: 'column'
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
  iconColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 2,
    paddingLeft: 4,
  },
  iconNumber: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  iconGroup: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})
