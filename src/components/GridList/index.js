import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';
import { gridify, getDirection} from '@lib/gridifyArray'

export default class MyComponent extends Component {

  static defaultProps = {}

  static propTypes = {}

  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.state = {
      ds: ds.cloneWithRows(gridify(props.items))
    }

    this._renderRow = this._renderRow.bind(this)
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      ds: this.state.ds.cloneWithRows(gridify(newProps.items))
    });
  }

  _renderRow(rowData, sectionId, i) {

    return (
      <View
        style={{
          flex: 1,
          height: 100,
          backgroundColor: 'lightgreen',
          flexDirection: 'row'
        }}
      >
        {
          rowData.map((item, j) => (
            <View
              key={j}
              style={{
                flex: 1,
                height: 100,
                backgroundColor: 'darkorchid',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                {this._getComponentForDirection(getDirection(i, j))}
              </Text>
            </View>
          ))
        }
      </View>
    )
  }
  _getComponentForDirection(d) {
    switch (d) {
      case 0:
        return <Text>T</Text>
      case 1:
        return <Text>R</Text>
      case 2:
        return <Text>B</Text>
      case 3:
        return <Text>L</Text>
    }
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
    );
  }

}

const styles = StyleSheet.create({
  list: {
    flex: 1
  }
})
