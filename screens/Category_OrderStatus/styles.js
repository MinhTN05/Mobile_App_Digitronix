import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    productDetail: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    detailLabel: {
        fontWeight: 'bold',
        marginRight: 5,
    },
    detailText: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        marginRight: 5,
        color: 'white',
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
})

export default styles;