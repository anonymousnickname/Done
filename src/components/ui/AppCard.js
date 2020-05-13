import React from 'react'
import { StyleSheet, View } from 'react-native'

import { theme } from '../../../theme'

export const AppCard = props => {
    return (
    <View style={ {...styles.default, ...props.style} }>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: theme.DARK_COLOR,
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {width: 1, height: 5},
        elevation: 8,
        backgroundColor: theme.LIGHT_COLOR
    }
})