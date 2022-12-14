import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../redux/CartItem';
import styles from './cartscreencss';
function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
  }

  function CartScreen() {
    const cartItems = useSelector(state => state)
    const dispatch = useDispatch()
  
    const removeItemFromCart = item =>
      dispatch({
        type: REMOVE_FROM_CART,
        payload: item
      })
    return (
      <View
        style={{
          flex: 1
        }}>
        {cartItems.length !== 0 ? (
          <FlatList
            data={cartItems}
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
                    <TouchableOpacity
                      onPress={() => removeItemFromCart(item)}
                      style={styles.button}>
                      <Text style={styles.buttonText}>Remove -</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <View style={styles.emptyCartContainer}>
            <Text style={styles.emptyCartMessage}>Your cart is empty :'(</Text>
          </View>
        )}
      </View>
    )
  }

export default CartScreen;