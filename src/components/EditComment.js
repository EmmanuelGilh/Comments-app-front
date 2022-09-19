import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditComment() {

    const [comment, setComment] = useState({ email: '', comment: '' })
    // const [editedComment, setEditedComment] = useState()

    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    const loadComment = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/comments/${id}`)
            setComment(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        loadComment()
    }, [])


    const handleEdit = () => {
        try {
            axios.put(`http://localhost:4000/comments/${id}`, comment)
                .then(() => {
                    navigate('/')
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setComment({ ...comment, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h1>Edit your comment</h1>
            <form>
                <p></p>
                <input
                    value={comment.email}
                    name='email'
                    onChange={handleChange}
                    placeholder='Email' />
                <input
                    value={comment.comment}
                    name='comment'
                    onChange={handleChange}
                    placeholder='Add a comment...' />
            </form>
            <button
                onClick={handleEdit}
            >Edit</button>
        </div>
    )
}

export default EditComment