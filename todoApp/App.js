/* eslint-disable no-undef */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';


import Header from './components/Header';
const App = () => {
  let defaultList = [
    {
      id: 0,
      item: 'Milk',
    },
    {
      id: 1,
      item: 'Eggs',
    },
    {
      id: 2,
      item: 'Apple',
    },
  ];
  const [items, setItems] = useState(defaultList);
  return (
    <View style={styles.container}>
      <Header title="Shopping list" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
