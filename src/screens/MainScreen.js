import React, { useContext } from 'react'
import { StyleSheet, FlatList, Image, View } from 'react-native'

import { AddForm } from '../components/AddForm'
import { TodoItem } from '../components/TodoItem' 
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'

export const MainScreen = ({showTodo}) => {
    const { addTodo, doings, removeTodo } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)
    let content = (
        <FlatList
            style={styles.list}
            data={doings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<TodoItem data={item} onRemove={removeTodo} showTodo={changeScreen}/>)}/>
    )

    if (doings.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} resizeMode="contain"  source={require('../../assets/noItems.png.png')} />
            </View>
        )
    }

    return (
        <View>
        <AddForm onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
      marginVertical: 15
    },
    imgWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 480
    },
    image: {
        width: '100%',
        height: '100%'
    }
})