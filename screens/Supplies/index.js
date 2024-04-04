import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const SuppliesScreen = () => {

    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [supplies, setsupplies] = useState([
        { id: 1, supplies: 'Test', price: '23000', quantity: '10' },
        { id: 2, supplies: 'Test123', price: '245672', quantity: '20' },
        { id: 3, supplies: 'Test456', price: '1233000', quantity: '100' },
    ]);

    const navigateToDetail = () => {
        navigation.push('CategorySuppliesScreen', {});
    }

    const handleSearch = () => {
        // Tìm kiếm worker dựa trên từ khóa searchKeyword
        const filteredSupplies = supplies.filter(supplies =>
            supplies.name.toLowerCase().includes(setSearchKeyword.toLowerCase())
        );
        // Cập nhật danh sách worker đã lọc
        setsupplies(filteredSupplies);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Name Supplies"
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={supplies}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navigateToDetail}>
                        <View style={styles.suppliesContainer}>
                            <Text style={styles.suppliesName}>Supplies: {item.supplies}</Text>
                            <Text style={styles.suppliesText}>Price: {item.price}</Text>
                            <Text style={styles.suppliesText}>Quantity: {item.quantity}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default SuppliesScreen