import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from './components/Header'
import { MainScreen } from './screens/MainScreen'
import { TodoItemScreen } from'./screens/TodoItemScreen'
import { ScreenContext } from './context/screen/screenContext'


export const MainLayout = () => {
  const {todoId} = useContext(ScreenContext)

    return (
    <View style={styles.wrapper}>
        <Header/>
        <View style={styles.container}>
            { todoId ? <TodoItemScreen/> : <MainScreen/> } 
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      paddingVertical: 30,
      flex: 1
    },
    wrapper: {
      flex: 1
    }
  })
  