import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const ValuesStyles = StyleSheet.create({
  background: {
    backgroundColor: '#041c2c',
    padding: 16,
    flex: 1
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  listItem: {
    backgroundColor: '#00b5f1',
    margin: 3,
    height: 200,
    justifyContent: 'center'
  },
  listItemText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 50,
  },
  selectedItemContainer: {
    backgroundColor: '#00b5f1',
    margin: 3,
    justifyContent: 'center',
    flex: 1
  },
  selectItemButton: {
    height: '100%',
    justifyContent: 'center'
  }
});

const values = [
  { key: '0' },
  { key: '1' },
  { key: '2' },
  { key: '3' },
  { key: '5' },
  { key: '8' },
  { key: '13' },
];

export const ValuesList: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState(undefined);

  return (
    <SafeAreaView style={ValuesStyles.background}>
      <Text style={ValuesStyles.title}>Select a value:</Text>

      {selectedValue === undefined && <FlatList
        data={values}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedValue(item.key)}
            activeOpacity={.5}
            style={ValuesStyles.listItem}
            key={item.key}>
            <Text style={ValuesStyles.listItemText}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />}

      {selectedValue !== undefined &&
        <View
          style={ValuesStyles.selectedItemContainer}>
          <TouchableOpacity
            style={ValuesStyles.selectItemButton}
            onPress={() => setSelectedValue(undefined)}>
            <Text style={ValuesStyles.listItemText}>{selectedValue}</Text>
          </TouchableOpacity>
        </View>
      }
    </SafeAreaView>
  );
};