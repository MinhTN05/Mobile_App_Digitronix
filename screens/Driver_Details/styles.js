import { StyleSheet } from "react-native";

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
    list:{
        marginTop:-300,
      },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      orderDetails: {
    
      },
      orderText: {
        marginBottom: 5,
      },
      detailsButton: {
        color: 'blue',
      },
})

export default styles;