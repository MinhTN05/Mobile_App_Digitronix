import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderListContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#000',
    marginTop: 20,
  },
  orderContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderContent: {
    flex: 1,
  },
  orderText: {
    marginBottom: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

export default styles;