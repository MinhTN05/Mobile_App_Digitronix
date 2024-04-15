import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
  },
  dateContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Đặt marginBottom thành 10 để cách ra khỏi phần tiếp theo
    paddingHorizontal: 5,
    width: '100%',
  },
  columnContainer: {
    flex: 1,
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  texttext: {
    marginHorizontal: 10, // Cách 10 từ lề trái và lề phải
    marginTop: 100
  },
});