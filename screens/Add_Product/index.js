import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchaddProduct } from '../../store/slices/product';
import styles from './styles';

const AddProductScreen = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [categoryId, setCategoryId] = useState('');

    const handleAddProduct = () => {
        const productData = {
            product_name: productName,
            price: parseFloat(price),
            quantity: parseInt(quantity),
            category_id: parseInt(categoryId),
        };
        dispatch(fetchaddProduct(productData));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Add New Product</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Product Name:</Text>
                    <TextInput
                        style={styles.input}
                        value={productName}
                        onChangeText={setProductName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Price:</Text>
                    <TextInput
                        style={styles.input}
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Quantity:</Text>
                    <TextInput
                        style={styles.input}
                        value={quantity}
                        onChangeText={setQuantity}
                        keyboardType="numeric"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Category ID:</Text>
                    <TextInput
                        style={styles.input}
                        value={categoryId}
                        onChangeText={setCategoryId}
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
                    <Text style={styles.addButtonLabel}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AddProductScreen;