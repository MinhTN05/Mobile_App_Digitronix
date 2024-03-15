import React from 'react';
import {View, Text, TouchableOpacity,StatusBar,FlatList,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles'


let data = [
    {id:1, name: 'Tab1 :Nhiệm vụ đầu tiên'},
    {id:2, name: 'Tab2 :Nhiệm vụ 2'},
    {id:3, name: 'Tab2 :Nhiệm vụ 2'},
    {id:4, name: 'Tab2 :Nhiệm vụ 2'},
    {id:5, name: 'Tab2 :Nhiệm vụ 2'}
  ]
    
const WorkschedulesScreen = () => {

    const navigation = useNavigation();
    const Works = () => {
        navigation.navigate('WorksDetailsScreen')
      }
      const showItem = ({item}) => {
        return (
          <TouchableOpacity onPress={Works} style={styles.roomContainer}>
            <View style={styles.roomBox}>
              <View style={styles.boxImg}>
                <Image  style={styles.img} source={item.img} />
              </View>
              <Text>{item.name}</Text>
            </View>
            
          </TouchableOpacity>
        )
    }
    return (
        <>
        <View>
          <StatusBar hidden={true} />
          <FlatList 
            data={data}
            numColumns={1}
            renderItem={showItem}
            key={(item) => item.id.toString()}
          />
        {/* <Button title="Go back" onPress={() => navigation.goBack()}
         /> */}
          </View>
        </>
      )
      
}

export default WorkschedulesScreen