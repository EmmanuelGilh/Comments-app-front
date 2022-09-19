import React, { useState, useEffect } from 'react'
import axios from 'axios'



function PostComment({ loadComments }) {

    const [newComment, setNewComment] = useState({ email: '', comment: '' })


    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios.post('http://localhost:4000/comments', newComment
            ).then(() => {
                loadComments()
                handleClear()
            })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        setNewComment({ ...newComment, [e.target.name]: e.target.value })
    }

    const handleClear = () => {
        setNewComment({ email: '', comment: '' })
    }



    return (
        <div>
            <h1>Leave comments</h1>
            <form>
                <input
                    value={newComment.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Email' />
                <input
                    value={newComment.comment}
                    name='comment'
                    onChange={handleChange}
                    placeholder='Add a comment...' />
            </form>
            <button onClick={handleSubmit}>Comment</button>
        </div>
    )
}

export default PostComment