import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import ProductionService from '../../services/production';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CategoryManufactureScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const [productionDetails, setProductionDetails] = useState(null);
    const [access_token, setAccessToken] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        ProductionService.getProductionDetail(id)
            .then(response => {
                setProductionDetails(response.data);
            })
            .catch(error => {
                console.error('Error fetching production details:', error);
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

    const navigateBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            {productionDetails ? (
                <>
                    <View style={styles.detailContainer}>
                        <View style={styles.productionDetail}>
                            {productionDetails.production_detail?.map((productionDetailResponses, index) => (
                                <View key={index} style={styles.productionDetailResponses}>
                                    <Text style={styles.detailLabel}>Name: {productionDetailResponses.name}</Text>
                                    <Text style={styles.detailLabel}>Status: {productionDetailResponses.status}</Text>
                                    <Text style={styles.detailLabel}>Cost: {productionDetailResponses.cost}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={navigateBack} style={[styles.button, styles.backButton]}>
                            <Text style={styles.buttonText}>Back</Text>
                            <Image source={require('../../assets/images/back.png')} style={styles.buttonIcon} />
                        </TouchableOpacity>
                    </View>
                </>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    )
}

export default CategoryManufactureScreen