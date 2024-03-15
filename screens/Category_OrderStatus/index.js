import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles'

const CategoryOrderStatusScreen = ({navigation}) => {
    const navigateBack = () => {
        // Điều hướng quay lại trang trước
        navigation.goBack();
    };
    const navigateToEdit = () => {
        // Điều hướng đến trang chỉnh sửa sản phẩm
        // Thay 'EditProductScreen' bằng tên của trang chỉnh sửa sản phẩm của bạn
        navigation.navigate('EditProductScreen');
    };
    return (
        <View style={styles.container}>
            <Text style={styles.productTitle}>Thông tin chi tiết Trạng thái sản xuất</Text>
            <View style={styles.productDetail}>
                <Text style={styles.detailLabel}>Tên sản xuất:</Text>
                <Text style={styles.detailText}>ABC</Text>
            </View>
            <View style={styles.productDetail}>
                <Text style={styles.detailLabel}>Mã sản xuất:</Text>
                <Text style={styles.detailText}>123456</Text>
            </View>
            <View style={styles.productDetail}>
                <Text style={styles.detailLabel}>Tình trạng sản xuất:</Text>
                <Text style={styles.detailText}>Xong</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={navigateToEdit} style={[styles.button, styles.editButton]}>
                    <Text style={styles.buttonText}>Chỉnh sửa</Text>
                    <Image source={require('../../assets/images/edit.png')} style={styles.buttonIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateBack} style={[styles.button, styles.backButton]}>
                    <Text style={styles.buttonText}>Quay lại</Text>
                    <Image source={require('../../assets/images/back.png')} style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CategoryOrderStatusScreen