import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ProductService from '../../services/product';

const CategoryProductScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        ProductService.list({ id: id })
            .then(response => {
                setProductDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    const navigateBack = () => {
        navigation.goBack();
    };
    const navigateToEdit = () => {
        // Điều hướng đến trang chỉnh sửa sản phẩm
        navigation.navigate('EditProductScreen', { productId: id });
    };

    return (
        <View style={styles.container}>
            {productDetails ? (
                <>
                    <Text style={styles.productTitle}>Thông tin chi tiết sản phẩm</Text>
                    <View style={styles.detailContainer}>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>ID:</Text>
                            <Text style={styles.detailText}>{productDetails.id}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Tên sản phẩm:</Text>
                            <Text style={styles.detailText}>{productDetails.name}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Giá sản phẩm:</Text>
                            <Text style={styles.detailText}>{productDetails.price}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Ảnh sản phẩm:</Text>
                            <Image source={{ uri: productDetails.img }} style={styles.productImage} />
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Số lượng sản phẩm:</Text>
                            <Text style={styles.detailText}>{productDetails.quantity}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Ngày tạo:</Text>
                            <Text style={styles.detailText}>{productDetails.created_at}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Ngày cập nhật:</Text>
                            <Text style={styles.detailText}>{productDetails.updated_at}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>ID danh mục:</Text>
                            <Text style={styles.detailText}>{productDetails.category_id}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>ID danh mục:</Text>
                            <Text style={styles.detailText}>{productDetails.tags}</Text>
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
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default CategoryProductScreen;