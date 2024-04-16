import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    top: 20
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
});