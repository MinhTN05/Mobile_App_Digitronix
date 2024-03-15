import React from 'react';
import {View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const CategoryProductScreen = ({navigation}) => {
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
            <Text style={styles.productTitle}>Thông tin chi tiết sản phẩm</Text>
            <View style={styles.detailContainer}>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>ID:</Text>
                    <Text style={styles.detailText}>1</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Tên sản phẩm:</Text>
                    <Text style={styles.detailText}>Sản phẩm 1: ABC</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Giá sản phẩm:</Text>
                    <Text style={styles.detailText}>$100</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Ảnh sản phẩm:</Text>
                    <Image source={require('../../assets/images/img_product.png')} style={styles.productImage} />
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Số lượng sản phẩm:</Text>
                    <Text style={styles.detailText}>100</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>ID danh mục:</Text>
                    <Text style={styles.detailText}>123</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Ngày tạo:</Text>
                    <Text style={styles.detailText}>2024-03-12</Text>
                </View>
                <View style={styles.productDetail}>
                    <Text style={styles.detailLabel}>Ngày cập nhật:</Text>
                    <Text style={styles.detailText}>2024-03-12</Text>
                </View>
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

export default CategoryProductScreen