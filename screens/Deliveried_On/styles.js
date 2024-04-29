import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../contains';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
  },
  deliveryContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 0,
    marginBottom: 15,
    top: 10
  },
  delivery: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  deliveryInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    padding: 10,
    marginBottom: 10,
  },
  deliveryName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
  },
  deliveryStatusQuantityContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  deliveryStatus: {
    fontSize: 18,
    color: COLORS.textPrice,
  },
  deliveryQuantity: {
    fontSize: 18,
    color: COLORS.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
    width: '95%',
    borderWidth: 1,
    borderColor: COLORS.boder,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    color: COLORS.text,
  },
  texttext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
  },
});