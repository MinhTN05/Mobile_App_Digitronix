import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  dateContainer: {
    borderWidth: 2,
    borderColor: COLORS.boder, 
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 5,
    width: '100%',
  },
  columnContainer: {
    flexDirection: 'row', // Thay đổi từ 'column' thành 'row'
    alignItems: 'center',
  },
  quantityContainer: {
    marginLeft: 'auto', // Đẩy phần tử này sang phải cùng như có một khoảng trống giữa nó và các phần tử khác
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  startIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  startText: {
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.text,
    fontFamily: 'Arial',
  },
  textContainer: {
    borderWidth: 2,
    borderColor: COLORS.boder, 
    borderRadius: 5,
    padding: 10,
    marginTop: 0,
  },
  texttext: {
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10
  },
  rightAligned: {
    alignSelf: 'flex-end',
  },
});