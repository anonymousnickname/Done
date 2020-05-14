import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { theme } from '../../../theme'

export const AppLoader = () => (
    <View style={styles.center}>
        <ActivityIndicator size="large" color={theme.DARK_COLOR}/>
    </View>
)

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})