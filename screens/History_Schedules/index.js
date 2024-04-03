import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DeliveryHistoryScreen = () => {
  const navigation = useNavigation();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [deliveries, setDeliveries] = useState([
    { id: 1, customer: 'John Doe', address: '123 Main St', status: 'Delivered', deliver: 'Minh' },
    { id: 2, customer: 'Jane Smith', address: '456 Elm St', status: 'Pending', deliver: 'Duy' },
    { id: 3, customer: 'Alex Johnson', address: '789 Oak St', status: 'Delivered', deliver: 'Quân' },
  ]);

  const handleDeliveryPress = () => {
    // Chuyển hướng qua trang DeliveryDetailsScreen khi người dùng nhấn vào một giao hàng
    navigation.navigate('DeliveryDetailsScreen');
  };

  const handleSearch = () => {
    // Tìm kiếm giao hàng dựa trên từ khóa searchKeyword
    const filteredDeliveries = deliveries.filter(delivery =>
      delivery.customer.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    // Cập nhật danh sách giao hàng đã lọc
    setDeliveries(filteredDeliveries);
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
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../../assets/images/Search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={deliveries}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleDeliveryPress}>
            <View style={styles.deliveryContainer}>
              <Text style={styles.customerName}>Customer: {item.customer}</Text>
              <Text style={styles.deliveryAddress}>Address: {item.address}</Text>
              <Text style={styles.deliveryStatus}>Status: {item.status}</Text>
              <Text style={styles.deliveryStatus}>Deliver: {item.deliver}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default DeliveryHistoryScreen;