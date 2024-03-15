import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';

const EditSuppliesScreen = ({ navigation }) => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setquantity] = useState('');

    const saveChanges = () => {
        // Code để lưu thay đổi ở đây
        // Sau khi lưu xong, có thể điều hướng quay lại trang trước
        navigation.goBack();
    };

    return (
        <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={20}
        >
            <View style={styles.container}>
            <Text style={styles.productTitle}>Chỉnh sửa vật tư</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Giá vật tư:</Text>
                <TextInput
                    style={styles.input}
                    value={price}
                    onChangeText={text => setPrice(text)}
                    placeholder="Nhập giá sản phẩm"
                    keyboardType="numeric"
                />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Số lượng:</Text>
                <TextInput
                    style={styles.input}
                    value={quantity}
                    onChangeText={text => setquantity(text)}
                    placeholder="Nhập số lượng vật tư"
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity onPress={saveChanges} style={[styles.button, styles.saveButton]}>
                <Text style={styles.buttonText}>Lưu thay đổi</Text>
                <Image source={require('../../assets/images/Save.png')} style={styles.buttonIcon} />
            </TouchableOpacity>
        </View>
        </KeyboardAwareScrollView>
    );
};

export default EditSuppliesScreen;