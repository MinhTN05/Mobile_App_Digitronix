import React, { useEffect, useState } from 'react'
import {View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchProduct } from '../../store/slices/product';
import { fetchCategory } from '../../store/slices/category';
import { useDispatch, useSelector } from 'react-redux';

const ProductScreen = () => {

    const navigation = useNavigation();

    const navigateToDetail = () => {
        navigation.push('CategoryProductScreen', {});
    }

    const dispatch          = useDispatch()
    const dataCategory      = useSelector (state => state.Category.items)
    const dataProduct       = useSelector (state => state.Product.items)

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchProduct())
    }, [])

    console.log('dataProduct', dataProduct);
    console.log('dataCategory', dataCategory);

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Name Product"
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
                <Text style={styles.productText}>Sản phẩm 1: ABC</Text>
                <TouchableOpacity onPress={() => console.log('Xóa sản phẩm')} style={styles.deleteIconContainer}>
                    <Image source={require('../../assets/images/Delete_1.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToDetail} style={[styles.box, styles.product]}>
                <Image
                    source={require('../../assets/images/img_product.png')} // Đường dẫn đến hình ảnh sản phẩm 1
                    style={styles.productImage}
                />
                <Text style={styles.productText}>Sản phẩm 2: 123</Text>
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

export default ProductScreen