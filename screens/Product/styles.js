import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', // Đặt thanh tìm kiếm ở trên cùng màn hình
        alignItems: 'center',
        paddingTop: 50, // Khoảng cách từ trên cùng màn hình
    },
    box: {
        width: '80%',
        padding: 20,
        marginVertical: 10,
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    product: {
        paddingHorizontal: 10,
    },
    productText: {
        fontSize: 16,
    },
    productImage: {
        width: 50,
        height: 50,
        marginRight: 10, // Khoảng cách giữa hình ảnh sản phẩm và văn bản sản phẩm
    },
    deleteIconContainer: {
        padding: 5,
    },
    deleteIcon: {
        width: 20,
        height: 20,
    },
    imageContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    searchContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        width: '80%', // Để thanh tìm kiếm nhỏ lại
    },
    searchInput: {
        flex: 1,
        height: 40, // Đặt chiều cao của input nhỏ lại
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    searchIcon: {
        width: 30,
        height: 30,
    },
});

export default styles;