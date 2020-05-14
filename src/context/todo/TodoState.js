import { Alert } from 'react-native'
import React, { useReducer, useContext } from 'react'

import { TodoContext } from './todoContext'
import { todoReducer } from './todoReducer'
import { ScreenContext } from '../screen/screenContext'
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAR_ERROR, FETCH_DOINGS } from '../types'

export const TodoState = ({ children }) => {

    const initialState = {
        doings: [],
        loading: false,
        error: null
    }
    const { changeScreen } = useContext(ScreenContext)
    const [state, dispatch] = useReducer(todoReducer, initialState)

    const addTodo = async title => {
      const response = await fetch('https://rn-done.firebaseio.com/doings.json', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title})
      }
      )
      const data = await response.json()
      dispatch({ type: ADD_TODO, title, id: data.name })
    }

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
                      onPress: async () => {
                        changeScreen(null)
                        await fetch(`https://rn-done.firebaseio.com/doings/${id}.json`, {
                          method: 'DELETE',
                          headers: {'Content-Type': 'application/json'}
                      })
                        dispatch({type: REMOVE_TODO, id})
                    }}
                  ],
                  { cancelable: false }
                );
    } 

    const updateTodo = async (id, title) => {
      try {
        clearError()
        await fetch(`https://rn-done.firebaseio.com/doings/${id}.json`, {
          method: 'PATCH',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({title})
        }
        )
        dispatch({type: UPDATE_TODO, id, title})
      } catch(e) {
        showError('Something went wrong, try later...')
      }
    }

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    const hideLoader = () => dispatch({ type: HIDE_LOADER })

    const showError = error => dispatch({ type: SHOW_ERROR , error })

    const clearError = () => dispatch({ type: CLEAR_ERROR })

    const fetchDoings = async () => {
      try {
        showLoader()
        clearError()
        const response = await fetch('https://rn-done.firebaseio.com/doings.json', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
        }
        )
        const data = await response.json()
        const doings = Object.keys(data).map(key => ({...data[key], id: key}))
        dispatch({ type: FETCH_DOINGS, doings })
      } catch(e) {
        showError('Something went wrong, try later...')
      } finally {
        hideLoader()
      }
    }

    return <TodoContext.Provider 
        value={{
        doings: state.doings,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchDoings
    }}>{children}</TodoContext.Provider>
}