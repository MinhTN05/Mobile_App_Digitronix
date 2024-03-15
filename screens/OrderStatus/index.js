import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const OrderStatusScreen = () => {

    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.push('CategoryOrderStatusScreen', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateToDetail} style={[styles.box, styles.product]}>
                <Text style={styles.productText}>Trạng thái sản xuất 1: ABC</Text>
                <TouchableOpacity onPress={() => console.log('Xóa sản phẩm')} style={styles.deleteIconContainer}>
                    <Image source={require('../../assets/images/Delete_1.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToDetail} style={[styles.box, styles.product]}>
                <Text style={styles.productText}>Trạng thái sản xuất 2: 123</Text>
                <TouchableOpacity onPress={() => console.log('Xóa sản phẩm')} style={styles.deleteIconContainer}>
                    <Image source={require('../../assets/images/Delete_1.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/Add_1.png')}
                    style={styles.image}
                />
            </TouchableOpacity>
        </View>
    )
}

export default OrderStatusScreen