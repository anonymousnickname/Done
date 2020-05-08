import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { theme } from '../theme'

export const TodoItem = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {data.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: theme.itemTodoSize,
        marginTop: theme.itemTodoSize,
        borderWidth: 1,
        borderRadius: theme.itemTodoSize,
        backgroundColor: theme.darkBackgroundColor
    },
    text: {
        color: theme.lightColor,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
})