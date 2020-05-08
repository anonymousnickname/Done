import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { theme } from '../theme'

export const Header = () => {
    return (      
    <View style={styles.header}>
        <Text style={styles.title}>
            Done
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: theme.darkBackgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: theme.lightColor,
        fontSize: 25,
        fontWeight: 'bold'
    }
})