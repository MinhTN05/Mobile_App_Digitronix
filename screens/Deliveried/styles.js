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
    color: COLORS.text
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
  row2: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.black,
    padding: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionsContainer: {
    width: screenWidth - 100, // screen width minus left and right padding
    paddingHorizontal: 15, // padding left and right
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 10, // padding top and bottom
    backgroundColor: 'white',
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 16,
  },
  sendOption: {
    marginTop: 5,
    backgroundColor: 'lightgreen',
  },
  sendText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});