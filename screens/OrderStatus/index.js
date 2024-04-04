import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const OrderStatusScreen = () => {

    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [orderStatus, setOrderStatus] = useState([
        { id: 1, order: '1: ABC', status: 'peding' },
        { id: 2, order: '2: 123', status: 'done' },
    ]);

    const navigateToDetail = () => {
        navigation.push('CategoryOrderStatusScreen', {});
    }

    const handleSearch = () => {
        const filteredOrder = orderStatus.filter(order =>
            order.order.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setOrderStatus(filteredOrder);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Manufacture Process"
                    value={searchKeyword}
                    onChangeText={text => setSearchKeyword(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={orderStatus}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navigateToDetail}>
                        <View style={[styles.box, styles.product]}>
                            <Text style={styles.productText}>Order: {item.order}</Text>
                            <Text style={styles.productStatus}>Status: {item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default OrderStatusScreen