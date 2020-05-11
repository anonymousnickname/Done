import React from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

import { theme } from '../../theme'
import { AppCard } from './../components/ui/AppCard'

export const TodoItemScreen = ({goBack, data}) => {
    return (
        <View style={styles.container}>
            <AppCard style={styles.card}>
            <Text style={styles.title}>
                {data.title}
            </Text>
            <Button title="EDIT"/>
            </AppCard>
            <View style={styles.buttonsWrap}>
                <View style={styles.button}>
                    <Button title="GO BACK" onPress={goBack} color={theme.darkBackgroundColor}/>
                </View>
                <View style={styles.button}>
                    <Button title="DELETE" onPress={goBack} color={theme.deleteButton}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 180
    },
    card: {
        marginBottom: 20
    },
    buttonsWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})