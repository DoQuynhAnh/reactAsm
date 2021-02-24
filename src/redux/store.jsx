import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from './reducer/Layout.slice'

const rootReducer = {
    layout: layoutReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store