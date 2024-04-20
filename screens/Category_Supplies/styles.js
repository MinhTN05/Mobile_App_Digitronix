import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundColor,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailContainer: {
        marginBottom: 20,
        width: '100%',
    },
    materialDetails: {
        top: 20,
        flexDirection: 'row',
        marginBottom: 15, // Tăng khoảng cách giữa các phần tử
        alignItems: 'center',
        width: '100%',
    },
    detailLabel: {
        fontWeight: 'bold',
        marginRight: 10, // Tăng khoảng cách giữa nhãn và nội dung
        fontSize: 18,
    },
    detailText: {
        flex: 1,
        fontSize: 18,
        overflow: 'hidden', // Ẩn bất kỳ nội dung nào vượt ra khỏi khung hiển thị
        textAlign: 'left', // Canh lề văn bản về phía trái
    },
    productImage: {
        width: 80,
        height: 80, 
        marginRight: 10, // Tăng khoảng cách giữa hình ảnh và văn bản
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20, // Tăng khoảng cách giữa phần nội dung và nút
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15, // Tăng độ cao của nút
        paddingHorizontal: 30, // Tăng độ rộng của nút
        marginHorizontal: 10,
        borderRadius: 10, // Bo tròn góc của nút
    },
    buttonText: {
        marginRight: 5,
        color: 'white',
        fontSize: 18,
    },
    editButton: {
        backgroundColor: 'blue',
    },
    backButton: {
        backgroundColor: 'gray',
    },
    buttonIcon: {
        width: 20,
        height: 20,
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default styles;