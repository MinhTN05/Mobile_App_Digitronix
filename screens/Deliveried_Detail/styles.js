import { StyleSheet } from "react-native";
import { COLORS } from '../../contains'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
    justifyContent: 'center'
  },
  detailContainer: {
    left: 10,
    marginBottom: 20,
    width: '100%',
  },
  orderResponse: {
    flexDirection: 'row', // Đặt các phần tử con cùng hàng với nhau
    alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
    marginBottom: 15, // Tăng khoảng cách giữa các hàng
  },
  orderResponse1: {
    flexDirection: 'row', // Đặt các phần tử con cùng hàng với nhau
    alignItems: 'center', // Căn chỉnh các phần tử theo chiều dọc
    marginBottom: 15,
    justifyContent: 'center',
    borderWidth: 1, // Thêm độ rộng khung viền
    borderColor: COLORS.borderColor, // Màu của khung viền
    borderRadius: 5, // Độ cong của góc khung viền
    width: '40%',
    alignSelf: 'center',
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 10, // Tăng khoảng cách giữa nhãn và nội dung
    fontSize: 18,
  },
  detailText: {
    fontSize: 18,
    overflow: 'hidden', // Ẩn bất kỳ nội dung nào vượt ra khỏi khung hiển thị
    textAlign: 'left', // Canh lề văn bản về phía trái
  },
  map: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;