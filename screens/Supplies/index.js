import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const SuppliesScreen = () => {

    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.push('CategorySuppliesScreen', {});
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Name Supplies"
                />
                <TouchableOpacity style={styles.searchButton}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={navigateToDetail} style={[styles.box, styles.product]}>
                <Image
                    source={require('../../assets/images/img_product.png')} // Đường dẫn đến hình ảnh sản phẩm 1
                    style={styles.productImage}
                />
                <Text style={styles.productText}>Vật tư 1: ABC</Text>
                <TouchableOpacity onPress={() => console.log('Xóa sản phẩm')} style={styles.deleteIconContainer}>
                    <Image source={require('../../assets/images/Delete_1.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToDetail} style={[styles.box, styles.product]}>
                <Image
                    source={require('../../assets/images/img_product.png')} // Đường dẫn đến hình ảnh sản phẩm 1
                    style={styles.productImage}
                />
                <Text style={styles.productText}>Vật tư 2: 123</Text>
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

export default SuppliesScreen