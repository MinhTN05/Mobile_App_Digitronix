import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { useWindowDimensions } from 'react-native';
import styles from './styles';

const WorksDetailsScreen = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description for Task 1', completed: false },
    { id: 2, title: 'Task 2', description: 'Description for Task 2', completed: false },
    { id: 3, title: 'Task 3', description: 'Description for Task 3', completed: false },
    { id: 4, title: 'Task 4', description: 'Description for Task 4', completed: false },
    { id: 5, title: 'Task 5', description: 'Description for Task 5', completed: false },
  ]);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const toggleTask = taskId => {
    if (expandedTaskId === taskId) {
      setExpandedTaskId(null);
    } else {
      setExpandedTaskId(taskId);
    }
  };

  const markAsDone = taskId => {
    setExpandedTaskId(null); // Đóng chi tiết task
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.outerDoneContainer}>
        <View style={styles.innerDoneContainer}>
          <Image
            source={require('../../assets/images/Done_1.png')}
            style={styles.doneImageSmall}
          />
          <Text style={styles.doneText}>Done</Text>
        </View>
      </View>
      <FlatList
        style={styles.box}
        data={tasks}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
              <View style={styles.taskItem}>
                {item.completed ? (
                  <Image
                    source={require('../../assets/images/Done_2.png')}
                    style={styles.doneImage}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/Done_1.png')}
                    style={styles.doneImage}
                  />
                )}
                <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
            {expandedTaskId === item.id && (
              <View style={styles.taskDetails}>
                <Text style={styles.taskDetailsText}>{item.description}</Text>
                <TouchableOpacity onPress={() => markAsDone(item.id)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Done</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
        keyExtractor={task => task.id.toString()}
        extraData={expandedTaskId}
      />
    </View>
  );
};

export default WorksDetailsScreen;