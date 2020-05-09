import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { theme } from '../theme'

export const Header = () => {
    return (      
    <View style={styles.header}>
        <Text style={styles.header__title}>
            Done
        </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.darkBackgroundColor,
    },
    header__title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: theme.lightColor
    }
})