import { StyleSheet } from "react-native";
import { COLORS } from "../../contains";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
})

export default styles;