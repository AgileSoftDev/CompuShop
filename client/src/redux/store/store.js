import { configureStore, } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducer/reducer';

const store = configureStore({
    reducer : rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
    devTools : process.env.NODE_Env !== 'production',
});


export default store;