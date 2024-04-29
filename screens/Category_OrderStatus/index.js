import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import OrderService from '../../services/order';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryOrderStatusScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [orderDetails, setOrderDetails] = useState(null);
    const [access_token, setAccessToken] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        OrderService.getOrderDetail(id)
            .then(response => {
                setOrderDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching order details:', error);
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

    return (
        <View style={styles.container}>
            {orderDetails ? (
                <>
                    <View style={styles.detailContainer}>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Deadline:</Text>
                            <Text style={styles.detailText}>{orderDetails.deadline}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Created at:</Text>
                            <Text style={styles.detailText}>{orderDetails.created_at}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Updated at:</Text>
                            <Text style={styles.detailText}>{orderDetails.updated_at}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Delivery Method:</Text>
                            <Text style={styles.detailText}>{orderDetails.delivery_method}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Payment Method:</Text>
                            <Text style={styles.detailText}>{orderDetails.payment_method}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Total Price:</Text>
                            <Text style={styles.detailText}>{orderDetails.total_price}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Status:</Text>
                            <Text style={styles.detailText}>{orderDetails.status}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>User Name:</Text>
                            <Text style={styles.detailText}>{orderDetails.user_name}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Customer Name:</Text>
                            <Text style={styles.detailText}>{orderDetails.customer_name}</Text>
                        </View>
                        <View style={styles.orderDetail}>
                            <Text style={styles.detailLabel}>Order Detail Responses:</Text>
                        </View>
                        <View style={styles.orderDetailResponses}>
                            {orderDetails.orderDetailResponses.map((orderDetailResponse, index) => (
                                <View key={index} style={styles.orderDetailResponse}>
                                    <Text style={styles.detailLabel1}>Quantity: {orderDetailResponse.quantity}</Text>
                                    <Text style={styles.detailLabel1}>Created At: {orderDetailResponse.created_at.split("T").join(" ")}</Text>
                                    <Text style={styles.detailLabel1}>Updated At: {orderDetailResponse.updated_at.split("T").join(" ")}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={navigateBack} style={[styles.button, styles.backButton]}>
                            <Text style={styles.buttonText}>Back</Text>
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

export default CategoryOrderStatusScreen;