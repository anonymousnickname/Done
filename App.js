import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

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
    setDoings(prev => prev.filter(item => item.id !== id))
  }

  let content = <MainScreen addTodo={addTodo} doings={doings} removeTodo={removeTodo} showTodo={setScreenId}/>

  if (screenId) {
    const selectedTodo = doings.find(todo => todo.id === screenId)
    content = <TodoItemScreen goBack={() => setScreenId(null)} data={selectedTodo}/>
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
