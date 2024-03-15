import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
    },
    inputLabel: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 18,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 18,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    buttonText: {
        marginRight: 5,
        color: 'white',
        fontSize: 18,
    },
    saveButton: {
        backgroundColor: 'green',
    },
    buttonIcon: {
        width: 20,
        height: 20,
    },
});

export default styles;