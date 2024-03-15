import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Button } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './styles';
const FirstRoute = () => (
  <View style={{ flex: 1 }} />
);
const SecondRoute = () => (
  <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const WorksDetailsScreen = () => {
  const TaskItem = ({ task, onToggle }) => {
    return (
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <View style={styles.taskItem}>
          <Text style={[styles.taskText, task.completed && styles.completedTask]}>
            {task.title}
          </Text>
          {task.completed && <Text style={styles.completedText}>✓</Text>}
        </View>
      </TouchableOpacity>
    );
  };

  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: false },
    { id: 3, title: 'Task 3', completed: false },
    { id: 4, title: 'Task 4', completed: false },
    { id: 5, title: 'Task 5', completed: false },
  ]);

  const toggleTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const calculateCompletionPercentage = () => {
    const completedTasksCount = tasks.filter(task => task.completed).length;
    const totalTasksCount = tasks.length;
    if (totalTasksCount === 0) return 0;
    return (completedTasksCount / totalTasksCount) * 100;
  };

  return (
    <View style={{ flex: 1 }}>
      <TabView
        navigationState={{ index, routes: [{ key: 'first', title: 'Đang làm' }, { key: 'second', title: 'Đã xong' }] }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <View style={styles.container}>
        <FlatList
          style={styles.box}
          data={tasks}
          renderItem={({ item }) => <TaskItem task={item} onToggle={toggleTask} />}
          keyExtractor={task => task.id.toString()}
        />
        <Text style={styles.percentageText}>
          {`${calculateCompletionPercentage()}% Completed`}
        </Text>
      </View>
      <Button title="Done" style={styles.button} onPress={() => console.log('Done button pressed')} />
    </View>
  );
};


export default WorksDetailsScreen;