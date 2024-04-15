import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },
  dateContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});