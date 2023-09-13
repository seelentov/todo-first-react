import { api } from './api'

export const taskApi = api.injectEndpoints({
  endpoints: builder => ({
    createTask: builder.mutation({
      query: (item) => ({
        body: item,
        url: '/todolist',
        method: 'POST'
      }),
      invalidatesTags: () => [{
        type: 'ToDo'
      }]
    }),
    getTask: builder.query({
      query: () => '/todolist/?_sort=id&_order=desc',
      providesTags: () => [{
        type: 'ToDo'
      }]
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `/todolist/${taskId}`,
        method: 'DELETE'
      }),
      invalidatesTags: () => [{
        type: 'ToDo'
      }]
    }),
    updateStatus: builder.mutation({
      query: ({ taskId, status }) => ({
        url: `/todolist/${taskId}`,
        method: 'PATCH',
        body: { status }
      }),
      invalidatesTags: () => [{
        type: 'ToDo'
      }]
    })
  })
})

export const { useCreateTaskMutation } = taskApi
export const { useGetTaskQuery } = taskApi
export const { useDeleteTaskMutation } = taskApi
export const { useUpdateStatusMutation } = taskApi
