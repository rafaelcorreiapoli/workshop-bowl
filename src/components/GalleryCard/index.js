import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CommentsIcon from '@components/CommentsIcon'
import LikeIcon from '@components/LikeIcon'

export default class GalleryCard extends Component {

  static defaultProps = {
    likesCount: 0,
    commentsCount: 0,
    hasLiked: false
  }

  static propTypes = {}

  constructor(props) {
    super(props);
    this.state = {};
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

    const selectedImageStyle = imagePosition === 'start' ? styles.imageContainerPositionLeft : styles.imageContainerPositionRight

    const imageElement = (
      <View
        style={[ styles.imageContainer, selectedImageStyle ]}
      >
        <Image
          source={{ uri: imageUrl}}
          style={[ styles.image, selectedImageStyle ]}
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
            <LikeIcon />
            <Text style={styles.iconNumber}>
              {likesCount}
            </Text>
          </View>
        </View>
      </View>
    )
    return (
      <View style={styles.container}>
        {imagePosition === 'start' ? imageElement : textElement}
        {imagePosition === 'start' ? textElement : imageElement}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  imageContainer: {
    flex: 0.65,
    overflow: 'hidden',
  },
  imageContainerPositionLeft: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10
  },
  imageContainerPositionRight: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
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
    // width: 250,
    // height: 120,
  }
})
