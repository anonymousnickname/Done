import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { TodoItem } from './src/TodoItem' 
import { Header } from './src/Header'
import { AddForm } from './src/AddForm'


export default function App() {
  const [doings, setDoings] = useState([])

  const addTodo = title => {
    setDoings((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <AddForm onSubmit={addTodo}/>
        {doings.map(todo => <TodoItem data={todo} key={todo.id}/>)}  
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
