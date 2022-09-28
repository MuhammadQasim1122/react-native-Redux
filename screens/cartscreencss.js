import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    bookItemContainer: {
      flexDirection: 'row',
      padding: 10
    },
    thumbnail: {
      width: 100,
      height: 150
    },
    bookItemMetaContainer: {
      padding: 5,
      paddingLeft: 10
    },
    textTitle: {
      fontSize: 22,
      fontWeight: '400'
    },
    textAuthor: {
      fontSize: 18,
      fontWeight: '200'
    },
    buttonContainer: {
      position: 'absolute',
      top: 110,
      left: 10
    },
    button: {
      borderRadius: 8,
      backgroundColor: '#ff333390',
      padding: 5
    },
    buttonText: {
      fontSize: 22,
      color: '#fff'
    },
    emptyCartContainer: {
      marginTop: 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
    emptyCartMessage: {
      fontSize: 28
    }
  })
export default styles;