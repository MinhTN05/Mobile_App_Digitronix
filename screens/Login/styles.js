import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../contains';

const styles = StyleSheet.create({
    container: {
        top: 150,
        paddingHorizontal: 30,
        paddingVertical: 30,
        flex: 1
    },
    header: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: 'auto',
        height: 'auto'
    },
    logo1: {
        width: 120,
        height: 100,
        top: 60
    },
    input: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: COLORS.white,
        borderRadius: 15,
        marginBottom: 30
    },
    button: {
        backgroundColor: COLORS.drawer,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 1,
        borderWidth: 1,
        borderColor: COLORS.yellow,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 22
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 15
    }
})

export default styles;