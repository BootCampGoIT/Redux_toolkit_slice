import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './PostsForm.module.css';

const initialState = {
    postsFormTitle: '',
    postsFormContent: ''
}

const PostsForm = ({ addNewPost, newNumbers = [1, 2, 32], text="3" }) => {
    const [value, setValue] = useState(text);
    const [numbers, setNumbers] = useState(newNumbers);


    const [state, getState] = useState(initialState);
    const onHandleSubmit = (e) => {
        e.preventDefault();
        const { postsFormTitle, postsFormContent } = state;
        addNewPost({ id: uuidv4(), title: postsFormTitle, content: postsFormContent })

        getState({ ...initialState })
    }
    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => setNumbers(prevState => ([...prevState.filter(number => number != value)]))}>Edit </button>

            <form name="postsForm"
                className={css.postsForm}
                onSubmit={onHandleSubmit}
            >
                <input
                    type="text"
                    name="postsFormTitle"
                    className={css.postsFormTitle}
                    placeholder="title"
                    onChange={(e) => getState({ ...state, [e.target.name]: e.target.value })}
                    value={state.postsFormTitle}
                />
                <textarea
                    name="postsFormContent"
                    id="postsFormContent"
                    cols="30"
                    rows="10"
                    className={css.postsFormContent}
                    placeholder="content"
                    onChange={(e) => getState({ ...state, [e.target.name]: e.target.value })}
                    value={state.postsFormContent}
                ></textarea>
                <button type="submit"
                    className={css.postsFormButton} >Add new post</button>
            </form >
        </>
    );
}

export default PostsForm;

// class PostsForm extends Component {
//     state = {
//         postsFormTitle: '',
//         postsFormContent: ''
//     }


//     onHandleSubmit = (e) => {
//         e.preventDefault();
//         const { postsFormTitle, postsFormContent } = this.state;
//         this.props.addNewPost({ id: uuidv4(), title: postsFormTitle, content: postsFormContent })
//         // console.log({ id: uuidv4(), title: postsFormTitle, content: postsFormContent })
//         this.setState({...initialState
//         })
//     }

//     onHandleChange = (e) => {
//         this.setState({ [e.target.name]: e.target.value })
//     }

//     render() {
//         return (
//             <form name="postsForm"
//                 className={css.postsForm}
//                 onSubmit={this.onHandleSubmit}
//             >
//                 <input
//                     type="text"
//                     name="postsFormTitle"
//                     className={css.postsFormTitle}
//                     placeholder="title"
//                     onChange={this.onHandleChange}
//                     value={this.state.postsFormTitle}
//                 />
//                 <textarea
//                     name="postsFormContent"
//                     id="postsFormContent"
//                     cols="30"
//                     rows="10"
//                     className={css.postsFormContent}
//                     placeholder="content"
//                     onChange={this.onHandleChange}
//                     value={this.state.postsFormContent}
//                 ></textarea>
//                 <button type="submit"
//                     className={css.postsFormButton} >Add new post</button>
//             </form >
//         );
//     }
// }

// export default PostsForm;