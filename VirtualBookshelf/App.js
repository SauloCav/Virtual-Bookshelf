import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import SearchBar from './Components/SearchBar';
import BookItem from './Components/BookItem';

const App = () => {
  const [searchKey, setSearchKey] = useState('');
  const [books, setBooks] = useState([]);
  
  const searchBooks = () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${searchKey}`)
      .then(response => response.json())
      .then(data => {
        const modifiedData = data.hits.map(item => ({ ...item, rate: 0 }));
        setBooks(modifiedData);
      });
  };

  const rateBook = (index, rating) => {
    const newBooks = [...books];
    newBooks[index].rate = rating;
    setBooks(newBooks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Virtual Bookshelf</Text>
      
      <SearchBar 
        searchKey={searchKey} 
        onSearchChange={setSearchKey} 
        onSearch={searchBooks} 
      />

      <FlatList 
        data={books}
        renderItem={({ item, index }) => (
          <BookItem 
            book={item} 
            onRate={(rating) => rateBook(index, rating)}
          />
        )}
        keyExtractor={item => item.objectID}
      />
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    marginTop: 40,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});


export default App;
