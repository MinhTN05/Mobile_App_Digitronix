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
                product.name.toLowerCase().includes(searchKeyword.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [searchKeyword, dataProduct.products]);

    //console.log('dataProduct', dataProduct);
    //console.log('dataRoles', dataRoles);
    // console.log(items.img);

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

    const handleSearchIconPress = () => {
        // Xử lý khi hình ảnh tìm kiếm được bấm vào
        console.log('Search icon pressed');
    };

    const handleProductPress = (id) => {
        // Xử lý khi sản phẩm được bấm vào, có thể điều hướng đến trang chi tiết sản phẩm với productId
        navigation.push('CategoryProductScreen', { id: id });
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Name Product"
                    onChangeText={text => setSearchKeyword(text)}
                    value={searchKeyword}
                />
                <TouchableOpacity onPress={handleSearchIconPress}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
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
}

export default ProductScreen