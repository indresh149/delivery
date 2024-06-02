import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ComingSoon() {
  return (
    <View style={styles.rowContainer}>
      <Text>Coming Soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
});

export default ComingSoon;
