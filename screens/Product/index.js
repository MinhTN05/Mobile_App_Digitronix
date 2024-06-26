import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchProduct } from '../../store/slices/product';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRoles } from '../../store/slices/roles';

const ProductScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const dataProduct = useSelector(state => state.Product.items);
    const dataRoles = useSelector(state => state.Roles.items);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProduct());
        dispatch(fetchRoles());
    }, [dispatch])

    useEffect(() => {
        if (searchKeyword.trim() === '') {
            setFilteredProducts(dataProduct.products);
        } else {
            const filtered = dataProduct.products.filter(product =>
                product.name.toLowerCase().includes(searchKeyword.toLowerCase().trim())
            );
            setFilteredProducts(filtered);
        }
    }, [searchKeyword, dataProduct]);

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

    // const handleSearchIconPress = () => {
    //     console.log('Search icon pressed');
    // };

    const handleProductPress = (id) => {
        navigation.push('CategoryProductScreen', { id: id });
    };

    // const AddProductPress = () => {
    //     navigation.push('AddProductScreen');
    // };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Product Name"
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
                // style={{maxHeight: '83%'}}
                data={filteredProducts}
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
            {/* <TouchableOpacity style={styles.addProductContainer} onPress={AddProductPress}>
                <Image
                    source={require('../../assets/images/Add_1.png')}
                    style={styles.addProduct}
                />
            </TouchableOpacity> */}
        </View>
    );
}

export default ProductScreen;