import { configureStore, createSlice } from "@reduxjs/toolkit";

// npm install @reduxjs/toolkit react-redux
// Centralized state management: 
// Redux is a useful tool for managing the state of your application
// Redux provides a centralized place to manage the application state. 
// All the state is stored in a single store, which makes it easier to manage and debug.

// Defining initaial state to username 
const initialState = {value: {username: ''}}

// createSlice function to generate a slice of our state that handles the user
const userSlice = createSlice({
    name: 'user',
    initialState,

    // We define two actions: login and logout which will be used to modify the state.
    reducers:{
        login: (state,action) =>{
            state.value = action.payload;
        },
        logout: (state) =>{
            state.value = initialState.value;
        },
    }
})

// Exporting these 2 actions login and logout
export const {login,logout} = userSlice.actions

// we are using the configureStore function to create our Redux store
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
})