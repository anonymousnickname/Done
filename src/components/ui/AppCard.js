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
        shadowColor: theme.darkBackgroundColor,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        textShadowOffset: {width: 2, height: 2},
        elevation: 8,
        backgroundColor: theme.lightColor
    }
})