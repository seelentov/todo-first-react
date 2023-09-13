/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { api } from './api/api'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true
})

export const actions = {}

const reducers = combineReducers({
  [api.reducerPath]: api.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware).concat(logger)
})
