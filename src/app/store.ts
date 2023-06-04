import { configureStore } from '@reduxjs/toolkit'
import routesReducer from './routeSlice'
import dataReducer from './dataSlice'

export default configureStore({
    reducer: {
        routes: routesReducer,
        data: dataReducer
    }
})