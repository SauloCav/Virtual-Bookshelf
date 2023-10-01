import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ searchKey, onSearchChange, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={searchKey}
        onChangeText={onSearchChange}
        placeholder="Type here..."
        style={styles.input}
      />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default SearchBar;
