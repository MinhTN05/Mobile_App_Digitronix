import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import MaterialService from '../../services/material';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategorySuppliesScreen = ({ route, navigation }) => {

    const { id } = route.params;
    const [materialDetails, setMaterialDetails] = useState(null);
    const [access_token, setAccessToken] = useState("")
    const dispatch = useDispatch();

    useEffect(() => {
        MaterialService.getMaterialDetail(id)
            .then(response => {
                setMaterialDetails(response.data);

            })
            .catch(error => {
                console.error('Error fetching material details:', error);
            });

        const fetchAccessToken = async () => {
            try {
                const token = await AsyncStorage.getItem("access_token");
                setAccessToken(token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        }

        fetchAccessToken();
    }, [id]);
    console.log(materialDetails);
    const navigateBack = () => {
        navigation.goBack();
    };
    const navigateToEdit = () => {
        navigation.navigate('EditSuppliesScreen', { materialId: id });
    };
    return (
        <View style={styles.container}>
            {materialDetails ? (
                <>
                    {materialDetails ? (
                        <Image source={{
                            uri: `${`http://localhost:1702/api/v1/materials/images/${materialDetails.img}`}`
                        }} style={styles.image} />
                    ) : (
                        <Text>No image available</Text>
                    )}
                    <View style={styles.detailContainer}>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Material Name:</Text>
                            <Text style={styles.detailText}>{materialDetails.name}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Material Price:</Text>
                            <Text style={styles.detailText}>{materialDetails.price}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Material Quantity:</Text>
                            <Text style={styles.detailText}>{materialDetails.quantity}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Created at:</Text>
                            <Text style={styles.detailText}>{materialDetails.created_at.split("T").join(" ")}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Updated at:</Text>
                            <Text style={styles.detailText}>{materialDetails.updated_at.split("T").join(" ")}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Category:</Text>
                            <Text style={styles.detailText}>{materialDetails.category_name}</Text>
                        </View>
                        <View style={styles.materialDetails}>
                            <Text style={styles.detailLabel}>Tags:</Text>
                            {materialDetails.tags.map((tags, index) => {
                                return <Text key={index} style={styles.detailText}>{tags.name}</Text>
                            })}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={navigateToEdit} style={[styles.button, styles.editButton]}>
                            <Text style={styles.buttonText}>Chỉnh sửa</Text>
                            <Image source={require('../../assets/images/edit.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateBack} style={[styles.button, styles.backButton]}>
                            <Text style={styles.buttonText}>Quay lại</Text>
                            <Image source={require('../../assets/images/back.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
}

export default CategorySuppliesScreen