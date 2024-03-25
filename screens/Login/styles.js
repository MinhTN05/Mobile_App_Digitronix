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
        width: 147,
        height: 109,
        top: 120
    },
    registerContainer: {
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 100, 
    },
    register: {
        color: '#5a5858',
        fontSize: FONTSIZE.h2,
        textAlign: 'center', 
    },
    registerClick: {
        color: COLORS.red,
        fontSize: 20
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
        backgroundColor: COLORS.black,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10 // Điều chỉnh kích thước nút
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 20
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 15
    }
})

export default styles;