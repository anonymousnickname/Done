import React from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import { AddForm } from '../components/AddForm'
import { TodoItem } from '../components/TodoItem' 

export const MainScreen = ({removeTodo, addTodo, doings}) => {
    return (
        <View>
        <AddForm onSubmit={addTodo}/>
        <FlatList
            style={styles.list}
            data={doings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<TodoItem data={item} onRemove={removeTodo}/>)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
      marginVertical: 15
    }
})