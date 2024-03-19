import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ProductService from '../../services/product';

const CategoryProductScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [productDetails, setProductDetails] = useState(null);

    useEffect(() => {
        // Gọi hàm getProductDetail(id) từ ProductService khi thành phần được mount
        ProductService.getProductDetail(id)
            .then(response => {
                // Xử lý kết quả trả về, set thông tin chi tiết sản phẩm vào state
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
                            <Text style={styles.detailLabel}>Product Name:</Text>
                            <Text style={styles.detailText}>{productDetails.name}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Price:</Text>
                            <Text style={styles.detailText}>{productDetails.price}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Image:</Text>
                            <Image source={{ uri: productDetails.img }} style={styles.productImage} />
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Quantity:</Text>
                            <Text style={styles.detailText}>{productDetails.quantity}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Created at:</Text>
                            <Text style={styles.detailText}>{productDetails.created_at}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Updated at:</Text>
                            <Text style={styles.detailText}>{productDetails.updated_at}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>ID Category:</Text>
                            <Text style={styles.detailText}>{productDetails.category_id}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Tags:</Text>
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