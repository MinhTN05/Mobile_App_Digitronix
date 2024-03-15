import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // justifyContent : 'center',
        // alignItems: 'center',
        padding: 10,
    },

    box:{
      marginTop:-300,
    },
    button:{
      height: 30,
      width: 30,
    },
    taskItem: {
        
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
      },
      taskText: {
        
        fontSize: 20,
      },
      completedTask: {
        textDecorationLine: 'line-through',
        color: '#aaa',
      },
      completedText: {
        fontSize: 26,
        marginLeft: 'auto',
        color: 'green',
      },
      percentageText: {
        alignSelf: 'flex-end',
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
      },
    
})

export default styles;