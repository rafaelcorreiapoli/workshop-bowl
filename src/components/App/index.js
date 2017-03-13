import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import GalleryList from '../GalleryList'
import videos from './videos'



export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videos
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <GalleryList
          videos={this.state.videos}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
})
