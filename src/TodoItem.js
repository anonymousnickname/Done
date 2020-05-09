import React from 'react'
import { TouchableOpacity ,StyleSheet, View, Text } from 'react-native'

import { theme } from '../theme'

export const TodoItem = ({data, onRemove}) => {
    const setTouchableHandler = () => {
        onRemove(data.id)
    }
    return (
        <TouchableOpacity activeOpacity={0.7} onLongPress={setTouchableHandler}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {data.title}
            </Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '95%',
        padding: theme.itemTodoSize,
        marginTop: theme.itemTodoSize,
        borderRadius: theme.itemTodoSize,
        backgroundColor: theme.darkBackgroundColor
    },
    text: {
        fontWeight: 'bold',
        color: theme.lightColor
    }
})