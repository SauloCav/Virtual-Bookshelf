import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Rating from './Rating';

const BookItem = ({ book, onRate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Author: {book.author}</Text>
      <Text style={styles.label}>URL:</Text>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.link}>{book.url}</Text>
      </TouchableOpacity>
      <Rating currentRating={book.rate} onRate={onRate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#f4f4f4',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    marginTop: 5,
    fontSize: 14,
  },
  link: {
    marginTop: 5,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default BookItem;
