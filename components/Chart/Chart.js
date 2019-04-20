import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { BarChart, Grid } from 'react-native-svg-charts'
import AlignedDataLabels from './AlignedDataLabels';

export default class Chart extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const fill = 'rgb(134, 65, 244)';
    const data = [900, 100, 600, 105, 100, 800, 120, 200, 110, 500, 115, 100];
    const labelArray = (
      <AlignedDataLabels
        data={data}
      />
    )

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}>
          Quantity of products sold in 2010.
        </Text>
        <View style={styles.chart}>
          <BarChart
            style={{ height: 350 }}
            data={data}
            svg={{ fill }}
            contentInset={{ top: 30, bottom: 30 }}
          >
            <Grid />
          </BarChart>
        </View>
        <View style={styles.labels}>
          {labelArray}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '400',
    width: '100%',
    textAlign: 'center'
  },
  chart: {
    paddingHorizontal: 20,
  },
  labels: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 22
  }
})