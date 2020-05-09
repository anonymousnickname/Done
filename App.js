import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

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

  const removeTodo = id => {
    setDoings(prev => prev.filter(item => item.id !== id))
  }
  return (
    <View>
      <Header/>
      <View style={styles.container}>
        <AddForm onSubmit={addTodo}/>
        <FlatList
            style={styles.list}
            data={doings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<TodoItem data={item} onRemove={removeTodo}/>)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30
  }, 
  list: {
    marginVertical: 15
  }
})
