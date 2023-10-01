import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Rating = ({ currentRating, onRate }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.ratingText}>Rating: </Text>
          
          {[1, 2, 3, 4, 5].map(i => (
            <TouchableOpacity key={i} onPress={() => onRate(i)}>
              <Text style={[styles.star, { color: i <= currentRating ? 'gold' : 'gray' }]}>★</Text>
            </TouchableOpacity>
          ))}
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingText: {
      marginRight: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    star: {
      fontSize: 20,
      marginRight: 5,
    },
  });
  
export default Rating;
