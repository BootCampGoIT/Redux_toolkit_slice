import { createAction } from "@reduxjs/toolkit";


const addNewPost = createAction("ADD_NEW_POST")
const deletePost = createAction("DELETE_POST");
const getFilterValue = createAction("FILTER_DATA");

export { addNewPost, deletePost, getFilterValue }
// const addNewPost = createAction("ADD_NEW_POST", (post) => {
//     return {
//         payload: { ...post, date: new Date() }
//     }
// });

// const addNewPost = (payload) => ({type: "ADD_NEW_POST", payload})

// const deletePost = (id) => {
//     return {
//         type: "DELETE_POST",
//         payload: id
//     }
// }

// const getFilterValue = (string) => {
//     return {
//             type: "FILTER_DATA",
//         payload: string
//     }
// }




