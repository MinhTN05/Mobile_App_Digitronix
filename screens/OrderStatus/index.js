import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchOrders } from '../../store/slices/order';
import { useDispatch, useSelector } from 'react-redux';

const OrderStatusScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const orderData = useSelector(state => state.Order.items);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredOrders, setFilteredOrders] = useState([]);

    useEffect(() => {
        dispatch(fetchOrders());
    }, [dispatch]);

    useEffect(() => {
        if (searchKeyword.trim() === '') {
            setFilteredOrders(orderData);
        } else {
            const filtered = orderData.filter(order =>
                order.customer_name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            setFilteredOrders(filtered);
        }
    }, [searchKeyword, orderData]);

    // const renderTrashIcon = () => {
    //     return (
    //         <TouchableOpacity onPress={() => console.log('Delete order')}>
    //             <Image
    //                 source={require('../../assets/images/Delete_1.png')}
    //                 style={styles.trashIcon}
    //             />
    //         </TouchableOpacity>
    //     );
    // };

    const handleOrderPress = (id) => {
        navigation.push('CategoryOrderStatusScreen', { id: id });
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Customer Name"
                    onChangeText={text => setSearchKeyword(text)}
                    value={searchKeyword}
                />
                <TouchableOpacity onPress={() => console.log('Search icon pressed')}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={[styles.searchIcon, styles.searchIconPosition]}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredOrders}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleOrderPress(item.id)}>
                        <View style={styles.orderContainer}>
                            <View style={styles.order}>
                                <View style={styles.orderInfo}>
                                    <Text style={styles.orderName}>Customer Name: {item.customer_name}</Text>
                                    <View style={styles.orderStatusPriceContainer}>
                                        <Text style={styles.orderStatus}>Status: {item.status}</Text>
                                        <Text style={styles.orderTotalPrice}>Total Price: ${item.total_price}</Text>
                                    </View>
                                </View>
                                {/* {renderTrashIcon()} */}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default OrderStatusScreen;