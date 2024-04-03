import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const DriverchedulesScreen = () => {
  const navigation = useNavigation();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Michael Johnson', license: 'ABC123' },
    { id: 2, name: 'Emily Davis', license: 'XYZ456' },
    { id: 3, name: 'Daniel Brown', license: 'DEF789' },
  ]);

  const handleDriverPress = () => {
    navigation.navigate('DriverDetailsScreen');
  };

  const handleSearch = () => {
    const filteredDrivers = drivers.filter(driver =>
      driver.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      driver.license.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setDrivers(filteredDrivers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Driver Name"
          onChangeText={text => setSearchKeyword(text)}
          value={searchKeyword}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require('../../assets/images/Search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={drivers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleDriverPress}>
            <View style={styles.driverContainer}>
              <Text style={styles.driverName}>Name: {item.name}</Text>
              <Text style={styles.driverLicense}>License plates: {item.license}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default DriverchedulesScreen;