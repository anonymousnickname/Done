import React from 'react'
import { StyleSheet, TextInput, Button, View } from 'react-native'

import { theme } from '../theme'

export const AddForm = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.container__input}/>
            <Button title="ADD NEW" color={theme.darkBackgroundColor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    container__input: {
        padding: 4,
        fontSize: 20,
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: theme.darkBackgroundColor
    }
})