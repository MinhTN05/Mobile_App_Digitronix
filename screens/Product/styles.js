import { StyleSheet } from 'react-native';
import {COLORS} from '../../contains'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
        alignItems: 'center', // Căn giữa các phần tử theo chiều dọc
        marginBottom: 10,
    },
    searchInput: {
        flex: 1, // Đảm bảo TextInput sẽ chiếm hết phần còn lại của hàng
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 5,
        padding: 10,
        marginRight: 10, // Khoảng cách giữa TextInput và hình ảnh tìm kiếm
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 5, // Khoảng cách giữa hình ảnh tìm kiếm và TextInput
    },
    productContainer: {
        backgroundColor: COLORS.yellow,
        borderRadius: 10,
        marginBottom: 10,
    },
    product: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    productInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 16,
        color: 'green',
    },
    trashIcon: {
        width: 30,
        height: 30,
        marginLeft : 'auto',
        alignItems: 'center'
    },
});

export default styles;