import { StyleSheet } from "react-native";
import { COLORS } from '../../contains';
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems: 'center'
    },
    box : {
        paddingHorizontal : 10,
        paddingVertical : 10,
        backgroundColor : '#0EAF89',
        borderRadius : 10,
        marginBottom : 20,
    },
    roomContainer : {
        width : '50%',
        borderRadius : 10,
        padding : 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
       
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    roomBox : {
        backgroundColor : COLORS.register,
        width : 390,
        height : 100,
        // justifyContent : 'space-between',
        alignItems :'center',
        
        borderRadius : 10
    },
    button :{
        position : 'absolute',
        bottom : 60,
        right : 10,
        paddingVertical : 10,
        paddingHorizontal : 40,
        borderWidth : 1,
        borderRadius : 10,
        borderColor : COLORS.white,
        shadowColor: COLORS.white,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
})


export default styles;