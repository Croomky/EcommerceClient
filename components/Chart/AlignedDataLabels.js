import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export default class AlignedDataLabels extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      labelArray: []
    }
  }

  createLabelArray() {
    var labelArray = [];
    for(var i = 0; i < this.props.data.length; i++) {
      labelArray.push(
        <View
          key={i}
          style={styles.labelView}
        >
          <Text style={styles.labelText}>
            {this.props.data[i]}
          </Text>
        </View>
      )
    }

    return labelArray;
  }

  componentDidMount() {
    this.setState({
      labelArray: this.createLabelArray()
    })
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        {this.state.labelArray}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  labelView: {
    flex: 1,
    paddingTop: 5,

    // backgroundColor: 'grey',
  },
  labelText: {
    textAlign: 'right',
    transform: [
      { rotate: '300deg' },
      { translateX: 1 },
      { translateY: 8 }
    ],
    paddingBottom: 10,
    width: 50,
    height: '100%',

    // backgroundColor: 'blue',
  }
})