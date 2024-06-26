import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchMaterial } from '../../store/slices/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../../store/slices/roles';

const SuppliesScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const dataMaterial = useSelector(state => state.Material.items);
    const dataRoles = useSelector(state => state.Roles.items);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredMaterial, setFilteredMaterial] = useState([]);

    useEffect(() => {
        dispatch(fetchMaterial());
        dispatch(fetchRoles());
    }, [dispatch])

    useEffect(() => {
        if (searchKeyword.trim() === '') {
            setFilteredMaterial(dataMaterial.materials);
        } else {
            const filtered = dataMaterial.materials.filter(material =>
                material.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            setFilteredMaterial(filtered);
        }
    }, [searchKeyword, dataMaterial.materials]);

    const handleProductPress = (id) => {
        navigation.push('CategorySuppliesScreen', { id: id });
    }

    const handleSearchIconPress = () => {
        console.log("Search icon is pressed");
    }

    // const renderTrashIcon = () => {
    //     return (
    //         <TouchableOpacity onPress={() => console.log('Delete product')}>
    //             <Image
    //                 source={require('../../assets/images/Delete_1.png')}
    //                 style={styles.trashIcon}
    //             />
    //         </TouchableOpacity>
    //     );
    // };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Material Name"
                    onChangeText={text => setSearchKeyword(text)}
                    value={searchKeyword}
                />
                <TouchableOpacity onPress={handleSearchIconPress}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={[styles.searchIcon, styles.searchIconPosition]}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredMaterial}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleProductPress(item.id)}>
                        <View style={styles.productContainer}>
                            <View style={styles.product}>
                                <View style={styles.productInfo}>
                                    <Text style={styles.productName}>Name: {item.name}</Text>
                                    <View style={styles.productPriceQuantityContainer}>
                                        <Text style={styles.productPrice}>Price: {item.price}</Text>
                                        <Text style={styles.productQuantity}>Quantity: {item.quantity}</Text>
                                        <Text style={styles.productTag}>Tags:</Text>
                                        {item.tags.length > 0 ? (
                                            item.tags.map((tag, index) => (
                                                <Text key={index} style={styles.productQuantity}>- {tag.name}</Text>
                                            ))
                                        ) : (
                                            <Text style={styles.productQuantity}>- No data</Text>
                                        )}
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
}

export default SuppliesScreen