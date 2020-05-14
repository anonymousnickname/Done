import React, { useContext, useEffect, useCallback } from 'react'
import { StyleSheet, FlatList, Image, View } from 'react-native'

import { AddForm } from '../components/AddForm'
import { TodoItem } from '../components/TodoItem' 
import { TodoContext } from '../context/todo/todoContext'
import { ScreenContext } from '../context/screen/screenContext'
import { AppLoader } from '../components/ui/AppLoader'
import { AppTextBold } from '../components/ui/AppTextBold'
import { theme } from '../../theme'
import { AppButton } from '../components/ui/AppButton'

export const MainScreen = ({showTodo}) => {
    const { addTodo, doings, removeTodo, loading, error, fetchDoings } = useContext(TodoContext)
    const { changeScreen } = useContext(ScreenContext)

    const loadDoings = useCallback(async () => await fetchDoings(), [fetchDoings])

    useEffect(() => {
        loadDoings()
    }, [])
    let content = (
        <FlatList
            style={styles.list}
            data={doings}
            keyExtractor={item => item.id}
            renderItem={({item}) => (<TodoItem data={item} onRemove={removeTodo} showTodo={changeScreen}/>)}/>
    )

    if (loading) {
        return <AppLoader/>
    }

    if (error) {
        return (
        <View style={styles.center}>
            <View style={styles.textBlock}>
            <AppTextBold style={styles.error}>Error</AppTextBold>
            <AppTextBold style={styles.error}>Try later</AppTextBold>
            </View>
            <AppButton onPress={loadDoings} style={styles.again}>Try again</AppButton>
            </View>
        )
    }

    if (doings.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image style={styles.image} resizeMode="contain"  source={require('../../assets/noItems.png.png')} />
            </View>
        )
    }


    return (
        <View>
        <AddForm onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
      marginVertical: 15
    },
    imgWrap: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        height: 480
    },
    image: {
        width: '100%',
        height: '100%'
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    error: {
        color: theme.DELETE_COLOR,
        fontSize: 22
    },
    again: {
        color: theme.DARK_COLOR,
        fontSize: 20
    },
    textBlock: {
        marginBottom: 30,
        alignItems: 'center'
    }
})