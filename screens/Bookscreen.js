import React from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native'
import { books } from '../utils/data';
import styles from './bookscreencss';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../redux/CartItem';
function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }
  
  function BookScreen() {
    const dispatch = useDispatch()
    const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })
    return (
      <View style={styles.container}>
        <FlatList
          data={books}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => Separator()}
          renderItem={({ item }) => (
            <View style={styles.bookItemContainer}>
              <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
              <View style={styles.bookItemMetaContainer}>
                <Text style={styles.textTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.textAuthor}>by {item.author}</Text>
                <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => addItemToCart(item)} style={styles.button}>
                <Text style={styles.buttonText}>Add +</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
export default BookScreen;