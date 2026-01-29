import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Restaurantes } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurantes[], void>({
      query: () => 'restaurantes'
    }),
    getMenuRestaurant: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getMenuItem: builder.query<Restaurantes, string>({
      query: (id) => `restaurantes/product/${id}`
    }),
    getItemCardapio: builder.query<Restaurantes, string>({
      query: (id) => `Restaurantes/add-producct/${id}`
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetMenuRestaurantQuery,
  useGetMenuItemQuery
} = api

export default api
