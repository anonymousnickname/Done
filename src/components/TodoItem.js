import React from 'react'
import { TouchableOpacity ,StyleSheet, View, Platform } from 'react-native'

import { theme } from '../../theme'
import { AppText } from './ui/AppText'

export const TodoItem = ({data, onRemove, showTodo}) => {
    const setTouchableHandler = () => {
        onRemove(data.id)
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onLongPress={setTouchableHandler} onPress={() => showTodo(data.id)}>
        <View style={styles.container}>
            <AppText style={styles.text}>
                {data.title}
            </AppText>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '100%',
        padding: theme.ITEM_TODO_SIZE+3,
        marginTop: theme.ITEM_TODO_SIZE,
        borderRadius: theme.ITEM_TODO_SIZE/2,
        backgroundColor: Platform.OS === 'android' ? theme.DARK_COLOR : theme.LIGHT_COLOR
    },
    text: {
        color: Platform.OS === 'android' ? theme.LIGHT_COLOR : theme.DARK_COLOR
    }
})