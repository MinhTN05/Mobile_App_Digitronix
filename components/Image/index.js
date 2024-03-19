import React from 'react';
import { Image, StyleSheet } from 'react-native';
import styles from './styles'

const CustomImage = ({ source, style }) => {
    // Kiểm tra xem source có tồn tại không trước khi render
    if (!source) {
        return null;
    }

    return (
        <Image
            source={source}
            style={styles.image}
        />
    );
};

export default CustomImage;