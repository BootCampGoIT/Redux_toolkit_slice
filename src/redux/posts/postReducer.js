import { createReducer } from "@reduxjs/toolkit";
import { addNewPost, deletePost, getFilterValue } from './postActions';

const postReducer = createReducer({ posts: [], filter: '' }, {
    [addNewPost]: (state, action) => ({ ...state, posts: [...state.posts, action.payload] }),
    [deletePost]: (state, action) => ({...state, posts: [...state.posts.filter(post => post.id !== action.payload)]}),
    [getFilterValue]: (state, action) => ({...state,filter: action.payload}),
})

export default postReducer;

// const initialState = { posts: [], filter: '' }

// const postReducer = (state = {...initialState}, action) => {
//     switch (action.type) {

//         case "ADD_NEW_POST":
//             return {
//                     ...state,
//                 posts: [...state.posts, action.payload]
//             }

//         case "DELETE_POST":
//             return {
//                 ...state,
//                 posts: [...state.posts.filter(post => post.id !== action.payload)]
//             }
//         case "FILTER_DATA":
//             return {
//                 ...state,
//                 filter: action.payload
//             }
//         default:
//             return state;
//     }
// }

