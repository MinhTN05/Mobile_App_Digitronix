import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchProduction } from '../../store/slices/production';
import { useDispatch, useSelector } from 'react-redux';

const ManufactureScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const productionData = useSelector(state => state.Production.items);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredProductions, setFilteredProductions] = useState([]);

    useEffect(() => {
        dispatch(fetchProduction());
    }, [dispatch]);

    useEffect(() => {
        if (searchKeyword.trim() === '') {
            setFilteredProductions(productionData);
        } else {
            const filtered = productionData.filter(production =>
                production.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            setFilteredProductions(filtered);
        }
    }, [searchKeyword, productionData]);

    const renderTrashIcon = () => {
        return (
            <TouchableOpacity onPress={() => console.log('Delete product')}>
                <Image
                    source={require('../../assets/images/Delete_1.png')}
                    style={styles.trashIcon}
                />
            </TouchableOpacity>
        );
    };

    const handleProductionPress = (id) => {
        navigation.push('CategoryManufactureScreen', { id: id });
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Production Name"
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
                data={filteredProductions}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductionPress(item.id)}>
                        <View style={styles.productionContainer}>
                            <View style={styles.production}>
                                <View style={styles.productionInfo}>
                                    <Text style={styles.productionName}>ID: {item.id}</Text>
                                    <View style={styles.productionStatusQuantityContainer}>
                                        <Text style={styles.productionStatus}>Status: {item.status}</Text>
                                        <Text style={styles.productionQuantity}>Quantity: {item.quantity}</Text>
                                    </View>
                                </View>
                                {renderTrashIcon()}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ManufactureScreen;