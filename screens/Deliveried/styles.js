import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../contains';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 20,
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
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  texttext: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
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