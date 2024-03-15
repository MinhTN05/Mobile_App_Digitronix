import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from "./styles";

const DrawerContent = (props) => {

    console.log(props);

    const username = "John Dang";

    const handleLogout = () => {
        // Xử lý đăng xuất ở đây
    };

    return (
        <View style={styles.container}>
            {/* Phần trên cùng với hình ảnh Account và tên người dùng */}
            <View style={styles.topSection}>
                <Image
                    source={require('../../assets/images/avatar_default.png')} // Đường dẫn đến hình ảnh Account
                    style={styles.accountIcon}
                />
                <Text style={styles.username}>{username}</Text>
            </View>
            {/* Phần dưới với nút Logout và hình ảnh logout */}
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Image
                    source={require('../../assets/images/Logout.png')} // Đường dẫn đến hình ảnh logout
                    style={styles.logoutIcon}
                />
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent