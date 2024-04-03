import { StyleSheet } from 'react-native';
import { COLORS } from '../../contains';

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
    deliveryContainer: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 5,
        marginBottom: 10,
        padding: 10,
        shadowColor: COLORS.black,
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 2,
        elevation: 2,
    },
    customerName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: COLORS.text,
        fontFamily: 'Arial',
    },
    deliveryAddress: {
        fontSize: 16,
        color: COLORS.text,
        fontFamily: 'Arial',
    },
    deliveryStatus: {
        fontSize: 16,
        color: COLORS.text,
        fontFamily: 'Arial',
    },
});

export default styles;