import React from 'react'
import { StyleSheet, Platform, View } from 'react-native'

import { theme } from '../../theme'
import { AppTextBold } from './ui/AppTextBold'

export const Header = () => {
    return (      
    <View style={{...styles.header, ...Platform.select({
        ios: styles.headerIos,
        android: styles.headerAndroid
    })}}>
        <AppTextBold style={styles.header__title}>
            Done
        </AppTextBold>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerAndroid: {
        backgroundColor: theme.DARK_COLOR,
    },
    headerIos: {
    borderBottomColor: theme.DARK_COLOR,
    borderBottomWidth: 3
    },
    header__title: {
        fontSize: 35,
        color: Platform.OS === 'ios' ? theme.DARK_COLOR : theme.LIGHT_COLOR
    }
})