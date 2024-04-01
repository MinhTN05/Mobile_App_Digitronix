import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const WorkschedulesScreen = () => {
  const navigation = useNavigation();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [workers, setWorkers] = useState([
    { id: 1, name: 'John Doe', mission: '1' },
    { id: 2, name: 'Jane Smith', mission: '2' },
    { id: 3, name: 'Alex Johnson', mission: '3' },
  ]);

  const handleWorkerPress = () => {
    // Chuyển hướng qua trang WorksDetailsScreen khi người dùng nhấn vào một công nhân
    navigation.navigate('WorksDetailsScreen');
  };

  const handleSearch = () => {
    // Tìm kiếm worker dựa trên từ khóa searchKeyword
    const filteredWorkers = workers.filter(worker =>
      worker.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    // Cập nhật danh sách worker đã lọc
    setWorkers(filteredWorkers);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Worker Name"
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
        data={workers}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={handleWorkerPress}>
            <View style={styles.workerContainer}>
              <Text style={styles.workerName}>Name: {item.name}</Text>
              <Text style={styles.workerMission}>Mission: {item.mission}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default WorkschedulesScreen