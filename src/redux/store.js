// ------- slice -----------------
import { createSlice, configureStore } from '@reduxjs/toolkit';


const postsSlice = createSlice({
    name: "posts",
    initialState: { posts: [], filter: '' },
    reducers: {
        addNewPost: (state, action) => ({ ...state, posts: [...state.posts, action.payload] }),
        deletePost: (state, action) => ({ ...state, posts: [...state.posts.filter(post => post.id !== action.payload)] }),
        getFilterValue: (state, action) => ({ ...state, filter: action.payload }),
    },
    // devTools: process.env.NODE_ENV !== 'production',
})
// console.log("postsSlice", postsSlice)
export const {addNewPost, deletePost, getFilterValue} = postsSlice.actions


const store = configureStore(postsSlice)

console.dir(store)


export default store;


// ---------- toolKit ----------------------

// import { configureStore } from '@reduxjs/toolkit';
// import postReducer from './posts/postReducer';
// import usersReducer from './users/usersReducer';

// const store = configureStore({
//     reducer: {
//         posts: postReducer,
//         users: usersReducer
//     },
//     devTools: process.env.NODE_ENV !== 'production',
// })

// export default store;

// --------------------------
// import { configureStore } from '@reduxjs/toolkit';
// import postReducer from './posts/postReducer';
// import usersReducer from './users/usersReducer';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     posts: postReducer, 
//     users: usersReducer})

// const store = configureStore({ 
//     reducer: rootReducer
// })

// export default store;

// -------------------------------------------------------

// import { createStore, combineReducers } from 'redux';
// import postReducer from './posts/postReducer';
// import usersReducer from './users/usersReducer';
// const rootReducer = combineReducers({
//     posts: postReducer, 
//     users: usersReducer})

// import {composeWithDevTools} from 'redux-devtools-extension';


// const store = createStore(rootReducer, composeWithDevTools());

// export default store;



