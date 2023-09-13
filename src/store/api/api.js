import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'http://localhost:4400/'

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['ToDo'],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: builder => ({
    global: builder.query({
      query: (item) => ({
        query: () => '/'
      })
    })
  })
})
