import { configureStore } from "@reduxjs/toolkit";

import loadersReducer from './loaderSlice'
import usersReducer from './userSlice'
import authReducer from './authSlice';

const store=configureStore({
    reducer:{
        loaders:loadersReducer,
        users:usersReducer,
        auth: authReducer,
    }
})

export default store