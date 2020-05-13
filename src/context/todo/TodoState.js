import { Alert } from 'react-native'
import React, { useReducer, useContext } from 'react'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

export const TodoState = ({ children }) => {
    const initialState = {
        doings: [{ id: '1', title: 'Learn React Native'}]
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = title => dispatch({type: ADD_TODO, title})
    const removeTodo = id => {
        const todo = state.doings.find(t => t.id === id)
        Alert.alert(
                  'Delete element',
                  `Are you sure taht you want to delete "${todo.title}"?`,
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel'
                    },
                    { text: 'Delete',
                      style: 'destructive',
                      onPress: () => {
                        changeScreen(null)
                        dispatch({type: REMOVE_TODO, id})
                    }}
                  ],
                  { cancelable: false }
                );
    } 
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title})

    return <TodoContext.Provider 
        value={{
        doings: state.doings,
        addTodo,
        removeTodo,
        updateTodo
    }}>{children}</TodoContext.Provider>
}