import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fetchDeliveries } from '../../store/slices/delivery';
import { useDispatch, useSelector } from 'react-redux';
import { updateDelivery } from '../../store/slices/delivery';
import Communications from 'react-native-communications';

const DeliveriedchedulesScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const deliveryData = useSelector(state => state.Delivery.item);
  const [filteredDeliverys, setFilteredDeliverys] = useState([]);
  const [statusFilter, setStatusFilter] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const filtered = deliveryData.filter(delivery => delivery.status === statusFilter); // Lọc dữ liệu theo trạng thái
        setFilteredDeliverys(filtered);
      } catch (error) {
        console.error("Error fetching userId from AsyncStorage:", error);
      }
    };

    fetchUserId();
  }, [deliveryData, statusFilter]);

  const handleDeliveryPress = (id) => {
    navigation.push('DeliveriedDetailsScreen', { id: id });
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOptionSelected(true);
  };

  const sendSMS = (phoneNumber, message) => {
    Communications.text(
      phoneNumber,
      message
    );
  };

  const handleSend = (id) => {
    if (isOptionSelected) {
      // Gọi hàm sendSMS với nội dung và số điện thoại tương ứng
      const phoneNumber = '0829981539';
      let message = ''; // Chuỗi tin nhắn mặc định
      switch (selectedOption) {
        case 'Không nghe máy':
          message = `Order_${id}_Message_Customer_don't_answer`;
          break;
        case 'Hủy đơn hàng':
          message = `Order_${id}_Message_Customer_don't_receive_the_order`;
          break;
        case 'Khác...':
          message = 'Other...';
          break;
        default:
          break;
      }
      // Gửi tin nhắn
      sendSMS(phoneNumber, message);
      setShowOptions(false);
    } else {
      console.log("Bạn hãy lựa chọn.");
    }
  };

  const handleStart = async (item) => {
    try {
      const id = item.id;
      const currentTime = new Date();
      const formattedDate = currentTime.toISOString().split('T')[0];
      const formattedTime = currentTime.toLocaleTimeString();
      const delivery_date = `${formattedDate} ${formattedTime}`;
      const status = true;
      const order_id = item.orderResponse.id;
      dispatch(updateDelivery({
        id,
        delivery_date,
        status,
        order_id
      }));
    } catch (error) {
      console.error("Error updating worker:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredDeliverys}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleDeliveryPress(item.id)}>
            <View style={styles.deliveryContainer}>
              <View style={styles.delivery}>
                <View style={styles.deliveryInfo}>
                  <View style={styles.column}>
                    <Text style={styles.deliveryName}>Id: {item.id}</Text>
                    <View style={styles.deliveryStatusQuantityContainer}>
                      <Text style={styles.deliveryStatus}>Status: {item.status ? "true" : "false"}</Text>
                      <Text style={styles.deliveryStatus}>Order Response: {item.orderResponse.id}</Text>
                      <View>
                        <Text style={styles.text}>Date: {date.toDateString()}</Text>
                      </View>
                      <View>
                        <Text style={styles.text}>Time: {date.toLocaleTimeString()}</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.column}>
                    <TouchableOpacity style={styles.row2} onPress={toggleOptions}>
                      <Text style={styles.texttext}>Report</Text>
                    </TouchableOpacity>
                    <Modal
                      transparent={true}
                      visible={showOptions}
                      onRequestClose={() => setShowOptions(false)}
                    >
                      <TouchableOpacity
                        style={styles.modalContainer}
                        activeOpacity={1}
                        onPress={() => setShowOptions(false)}
                      >
                        <View style={styles.optionsContainer}>
                          <TouchableOpacity
                            style={[
                              styles.option,
                              selectedOption === 'Không nghe máy' && styles.selectedOption,
                            ]}
                            onPress={() => handleOptionSelect('Không nghe máy')}
                          >
                            <Text style={styles.optionText}>Don't answer the phone.</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles.option,
                              selectedOption === 'Hủy đơn hàng' && styles.selectedOption,
                            ]}
                            onPress={() => handleOptionSelect('Hủy đơn hàng')}
                          >
                            <Text style={styles.optionText}>Cancel order.</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            style={[
                              styles.option,
                              selectedOption === 'Khác...' && styles.selectedOption,
                            ]}
                            onPress={() => handleOptionSelect('Khác...')}
                          >
                            <Text style={styles.optionText}>Other...</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={[styles.option, styles.sendOption]} onPress={handleSend(item.id)}>
                            <Text style={[styles.optionText, styles.sendText]}>Sent</Text>
                          </TouchableOpacity>
                        </View>
                      </TouchableOpacity>
                    </Modal>
                    <TouchableOpacity style={styles.row2} onPress={() => handleStart(item)}>
                      <Text style={styles.texttext}>Done</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              {/* {renderTrashIcon()} */}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={deliveries => deliveries.id.toString()}
      />
    </View>
  );
};

export default DeliveriedchedulesScreen;