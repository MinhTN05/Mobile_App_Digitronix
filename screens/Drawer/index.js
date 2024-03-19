import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "./styles";

const DrawerContent = (props) => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const getUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                if (storedUsername) {
                    setUsername(storedUsername);
                }
                setLoaded(true); // Đánh dấu là đã load xong username
            } catch (error) {
                console.log("Error retrieving username:", error);
            }
        };

        getUsername();
    }, []);

    useEffect(() => {
        const getUsername = async () => {
            try {
                const storedUsername = await AsyncStorage.getItem('username');
                if (storedUsername) {
                    setUsername(storedUsername);
                }
            } catch (error) {
                console.log("Error retrieving username:", error);
            }
        };

        if (loaded) {
            getUsername();
        }
    }, [loaded]);

    console.log("username", username);

    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
    };

    if (!loaded) {
        return null; // Hiển thị null nếu chưa load xong username
    }

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/avatar_default.png')}
                    style={styles.accountIcon}
                />
                <Text style={styles.username}>{username}</Text>
            </View>
            {/* Phần dưới với nút Logout và hình ảnh logout */}
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