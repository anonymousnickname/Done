import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, CLEAR_ERROR, SHOW_ERROR, SHOW_LOADER, HIDE_LOADER, FETCH_DOINGS } from '../types'

const handlers = {
  [ADD_TODO]: (state, { title, id }) => ({
    ...state,
    doings: [...state.doings, { id, title }]
  }),
  [REMOVE_TODO]: (state, { id }) => ({
    ...state,
    doings: state.doings.filter(todo => todo.id !== id)
  }),
  [UPDATE_TODO]: (state, { title, id }) => ({
    ...state,
    doings: state.doings.map(todo => {
      if (todo.id === id) {
        todo.title = title
      }
      return todo
    })
  }),
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [HIDE_LOADER]: state => ({...state, loading: false}),
  [CLEAR_ERROR]: state => ({...state, error: null}),
  [SHOW_ERROR]: (state, {error}) => ({...state, error}),
  [FETCH_DOINGS]: (state, {doings}) => ({...state, doings}),
  DEFAULT: state => state
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
