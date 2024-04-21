import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.backgroundColor,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: COLORS.backgroundSearch,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    position: 'relative',
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  searchIconPosition: {
    position: 'absolute',
    right: 10,
    transform: [{ translateY: -12 }],
  },
  productionContainer: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.black,
    borderRadius: 0,
    marginBottom: 10,
  },
  production: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  productionInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productionName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  productionStatusQuantityContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  productionStatus: {
    fontSize: 18,
    color: COLORS.textPrice,
    fontFamily: 'Arial',
  },
  productionQuantity: {
    fontSize: 18,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  trashIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
    marginTop: 30,
    alignItems: 'center',
  },
});

export default styles;