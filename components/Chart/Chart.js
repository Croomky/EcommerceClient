import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'

export default class Chart extends React.Component {
  
  constructor(props) {
    super(props);
    // this.barColor = 'rgb(134, 65, 244)';
    // this.data = [50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80];
  }

  render() {

    const fill = 'rgb(134, 65, 244)';
    const data = [90, 100, 85, 105, 110, 80, 120, 120, 110, 95, 115, 100];

    return (
      <View style={styles.mainContainer}>
        <Text>Quantity of sold products in 2010.</Text>
        <BarChart
          style={{ height: 350 }}
          data={data}
          svg={{ fill }}
          contentInset={{ top: 30, bottom: 30 }}
        >
          <Grid />
        </BarChart>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    width: '90%',
    // alignItems: 'center'
  }
})