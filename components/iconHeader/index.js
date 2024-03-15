import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import styles from './styles';

const IconHeader = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.openDrawer();
    }

    return (
        <TouchableOpacity onPress={openDrawer}>
            <Image
                source={require('../../assets/images/Menu.png')}
                style={styles.image}
            />
        </TouchableOpacity>
    )
}
export default IconHeader