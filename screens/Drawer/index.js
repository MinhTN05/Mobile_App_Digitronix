import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SetUserName } from '../../store/slices/username';

import styles from "./styles";

const DrawerContent = (props) => {

    const {username} = useSelector((state) => state.usernameReducer)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            // Xóa token từ AsyncStorage
            await AsyncStorage.removeItem('access_token');
            // Xóa tên người dùng
            dispatch(SetUserName(''));
            navigation.navigate('AuthStackScreen');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/avatar_default.png')}
                    style={styles.accountIcon}
                />
                <Text style={styles.username}>{username}</Text>
            </View>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Image
                    source={require('../../assets/images/Logout.png')}
                    style={styles.logoutIcon}
                />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent;