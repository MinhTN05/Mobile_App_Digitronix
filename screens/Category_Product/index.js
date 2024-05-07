import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ProductService from '../../services/product';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryProductScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [productDetails, setProductDetails] = useState(null);
    const [access_token, setAccessToken] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        ProductService.getProductDetail(id)
            .then(response => {
                setProductDetails(response.data);

            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });

        const fetchAccessToken = async () => {
            try {
                const token = await AsyncStorage.getItem("access_token");
                setAccessToken(token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        }

        fetchAccessToken();
    }, [id]);

    const navigateBack = () => {
        navigation.goBack();
    };
    const navigateToEdit = () => {
        navigation.navigate('EditProductScreen', { productId: id });
    };

    return (
        <View style={styles.container}>
            {productDetails ? (
                <>
                    {productDetails ? (
                        <Image source={{
                            uri: `${`http://192.168.1.3:1702/api/v1/products/images/${productDetails.img}`}`
                        }} style={styles.image} />
                    ) : (
                        <Text>No image available</Text>
                    )}
                    <View style={styles.detailContainer}>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Name:</Text>
                            <Text style={styles.detailText}>{productDetails.name}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Price:</Text>
                            <Text style={styles.detailText}>{productDetails.price}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Product Quantity:</Text>
                            <Text style={styles.detailText}>{productDetails.quantity}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Created at:</Text>
                            <Text style={styles.detailText}>{productDetails.created_at.split("T").join(" ")}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Updated at:</Text>
                            <Text style={styles.detailText}>{productDetails.updated_at.split("T").join(" ")}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Category:</Text>
                            <Text style={styles.detailText}>{productDetails.category_name}</Text>
                        </View>
                        <View style={styles.productDetail}>
                            <Text style={styles.detailLabel}>Tags:</Text>
                            <View style={styles.tagContainer}>
                                {productDetails.tags.map((tags, index) => {
                                    return <Text key={index} style={styles.tagText}>- {tags.name}</Text>;
                                })}
                            </View>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        {/* <TouchableOpacity onPress={navigateToEdit} style={[styles.button, styles.editButton]}>
                            <Text style={styles.buttonText}>Chỉnh sửa</Text>
                            <Image source={require('../../assets/images/edit.png')} style={styles.buttonIcon} />
                        </TouchableOpacity> */}
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