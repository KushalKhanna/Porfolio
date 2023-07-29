import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

const ViewScreen = () => {
  const records = [
    {id: 1, name: 'John Doe', age: 30, email: 'john@example.com'},
    {id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com'},
    // Add more records here as needed
  ];

  // Function to render each item in the list
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default ViewScreen;
