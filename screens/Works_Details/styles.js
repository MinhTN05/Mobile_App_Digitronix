import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  box: {
    top: 50,
    marginTop: 10,
  },
  taskItem: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  taskText: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  doneImage: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  outerDoneContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
  },
  innerDoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.yellow,
  },
  doneImageSmall: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  doneText: {
    fontSize: 16,
    color: '#333333',
  },
  taskDetails: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  taskDetailsText: {
    fontSize: 16,
    color: '#333333',
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default styles;