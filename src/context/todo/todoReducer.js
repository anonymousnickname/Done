import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '../types'

const handlers = {
  [ADD_TODO]: (state, { title }) => ({
    ...state,
    doings: [
      ...state.doings,
      {
        id: Date.now().toString(),
        title
      }
    ]
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
  DEFAULT: state => state
}

export const todoReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}
