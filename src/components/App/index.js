import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  ListView
} from 'react-native'
import GridList from '../GridList'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  _fetchVideos() {
    setTimeout(() => {
      this.setState({
        items: []
      })
    }, 500)
  }

  componentDidMount() {
    // this._fetchVideos()
    const interval = setInterval(() => {
      if (this.state.items.length === 10) {
        clearInterval(interval)
        return
      }
      this.setState({
        items: [...this.state.items, this.state.items.length]
      })

    }, 400)
  }
  render() {
    return (
      <View style={styles.container}>
        <GridList
          items={this.state.items}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
})
