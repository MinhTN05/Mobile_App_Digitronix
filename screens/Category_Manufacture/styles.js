import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: COLORS.backgroundColor,
    },
    detailContainer: {
        marginBottom: 20,
        width: '100%',
    },
    productionDetail: {
        top: 20,
        flexDirection: "row",
        marginBottom: 15, // Tăng khoảng cách giữa các phần tử
        alignItems: 'center', // Căn chỉnh các phần tử theo chiều ngang
        width: '100%',
    },
    productionDetailResponses: {
        flexDirection: 'column',
        marginBottom: 15,
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
        borderRadius: 10,
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
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalDetail: {
        marginTop: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        fontSize: 16,
        color: 'blue',
    },
    noDataText: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default styles;