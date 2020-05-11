import React, { useState } from 'react'
import { StyleSheet, Alert ,View } from 'react-native'

import { Header } from './src/Header'
import { MainScreen } from './src/screens/MainScreen'
import { TodoItemScreen } from'./src/screens/TodoItemScreen'

export default function App() {
  const [doings, setDoings] = useState([])
  const [screenId, setScreenId] = useState(null)

  const addTodo = title => {
    setDoings((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    const todo = doings.find(item => item.id === id);
    Alert.alert(
      'Delete element',
      `Are you sure taht you want to delete "${todo.title}"?`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        { text: 'Delete',
          style: 'destructive',
          onPress: () => {
          setScreenId(null)
          setDoings(prev => prev.filter(item => item.id !== id))
        }}
      ],
      { cancelable: false }
    );
  }

  const updateTodo = (id, title) => {
    setDoings(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    }))
  }
  let content = <MainScreen addTodo={addTodo} doings={doings} removeTodo={removeTodo} showTodo={setScreenId}/>

  if (screenId) {
    const selectedTodo = doings.find(todo => todo.id === screenId)
    content = <TodoItemScreen goBack={() => setScreenId(null)} data={selectedTodo} onRemove={removeTodo} onSave={updateTodo}/>
  }
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        {content}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }
})
