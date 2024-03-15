import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign , Entypo , MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { COLORS } from '../../contains'

import styles from './styles'

const IconStyle = ({name,onPress}) => {
    let icon, styleCustom ;
    switch (name) {
        case 'edit':
            icon =  <Entypo name="edit" size={18} color={COLORS.white} /> 
            break;
        case 'logout':
            icon =  <AntDesign name="logout" size={28} color={COLORS.white} />
            break;
        case 'home':
            styleCustom = {...styles.container}
            icon =  <AntDesign name='home' size={26} color={COLORS.white} /> 
            break;
        case 'info':
            styleCustom = {...styles.container}
            icon =  <AntDesign name='infocirlceo' size={26} color={COLORS.white} /> 
            break;
        case 'userInRoom':
            styleCustom = {...styles.container}
            icon =  <AntDesign name='team' size={26} color={COLORS.white} /> 
            break;
        case 'eye-slash':
        case 'eye':
            icon =  <Icon name={name} size={15} color={COLORS.grey} /> 
            break;
        case 'online-prediction':
            icon =  <MaterialIcons name={"online-prediction"} size={24} color={COLORS.green} />
            break;
        default:
            break;
            

    }

    return (
        <TouchableOpacity onPress={() => onPress()} style={{...styleCustom}}>
            {icon}
        </TouchableOpacity>
        
    )
}

export default IconStyle
