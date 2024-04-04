import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
    suppliesContainer: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 0,
        marginBottom: 10,
        padding: 10,
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    },
    suppliesName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: COLORS.text,
        fontFamily: 'Arial',
    },
    suppliesText: {
        fontSize: 16,
        color: COLORS.text,
        fontFamily: 'Arial',
    },
});

export default styles;