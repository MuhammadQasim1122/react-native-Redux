import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Icon } from '@rneui/themed';
function ShoppingCartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(state => state);

    return (
        <TouchableOpacity
        onPress={() => navigation.navigate('Cart')}
        style={styles.button}>
        <View style={styles.itemCountContainer}>
          <Text style={styles.itemCountText}>{cartItems.length}</Text>
        </View>
         <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
      />
      </TouchableOpacity>
    )
  }
  const styles = StyleSheet.create({
    button: {
      marginRight: 10
    },
    itemCountContainer: {
      position: 'absolute',
      height: 30,
      width: 30,
      borderRadius: 15,
      backgroundColor: '#FF7D7D',
      right: 22,
      bottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    },
    itemCountText: {
      color: 'white',
      fontWeight: 'bold'
    }
  })
  export default ShoppingCartIcon;