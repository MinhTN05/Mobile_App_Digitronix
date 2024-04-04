import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const ManufactureScreen = () => {

    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState('');
    const [manufactureProcesses, setManufactureProcesses] = useState([
        { id: 1, process: '1: ABC', start:'07/07/2024', end:'24/07/2024' },
        { id: 2, process: '2: 123', start:'07/07/2024', end:'24/07/2024' },
    ]);

    const navigateToDetail = () => {
        navigation.push('CategoryManufactureScreen', {});
    }

    const handleSearch = () => {
        const filteredProcesses = manufactureProcesses.filter(process =>
            process.process.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setManufactureProcesses(filteredProcesses);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search by Manufacture Process"
                    value={searchKeyword}
                    onChangeText={text => setSearchKeyword(text)}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Image
                        source={require('../../assets/images/Search.png')}
                        style={styles.searchIcon}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={manufactureProcesses}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={navigateToDetail}>
                        <View style={[styles.box, styles.product]}>
                            <Text style={styles.productText}>Process: {item.process}</Text>
                            <Text style={styles.productDay}>Start: {item.start}</Text>
                            <Text style={styles.productDay}>End: {item.end}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default ManufactureScreen