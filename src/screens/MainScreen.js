import React from 'react'
import { StyleSheet, FlatList, Image, View } from 'react-native'

import { AddForm } from '../components/AddForm'
import { TodoItem } from '../components/TodoItem' 

export const MainScreen = ({removeTodo, addTodo, doings, showTodo}) => {
    let content = (
        <FlatList
            style={styles.list}
            data={doings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<TodoItem data={item} onRemove={removeTodo} showTodo={showTodo}/>)}/>
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