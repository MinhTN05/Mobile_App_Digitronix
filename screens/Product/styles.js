import { StyleSheet } from 'react-native';
import {COLORS} from '../../contains'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    searchInput: {
      flex: 1,
      borderWidth: 1,
      borderColor: COLORS.black,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
    },
    searchIcon: {
      width: 24,
      height: 24,
      marginRight: 5,
    },
    productContainer: {
      backgroundColor: COLORS.yellow,
      borderRadius: 10,
      marginBottom: 10,
    },
    product: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
    },
    productInfo: {
      flex: 1,
      justifyContent: 'center',
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    productPriceQuantityContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    productPrice: {
      fontSize: 16,
      color: COLORS.black,
      marginRight: 10,
    },
    productQuantity: {
      fontSize: 16,
      color: COLORS.black,
    },
    trashIcon: {
      width: 30,
      height: 30,
      marginLeft: 'auto',
      alignItems: 'center',
    },
  });
  
  export default styles;