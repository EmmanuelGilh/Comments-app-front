import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { isEmail } from '../utils'
import styles from './EditComment.module.css'


function EditComment() {

    const [comment, setComment] = useState({ email: '', comment: '' })

    const params = useParams()
    const id = params.id
    const navigate = useNavigate()
    const isLoading = useRef(false)

    const loadComment = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/comments/${id}`)
            isLoading.current = false
            setComment(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isLoading.current) {
            return
        }
        isLoading.current = true
        loadComment()
    })


    const handleEdit = () => {
        try {
            if (!isEmail(comment.email)) {
                return
            }
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
        <div className={styles.edit_container}>
            <div className={styles.edit_box}>
                <div>
                    <h1 className={styles.edit_h1}>Edit your comment</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <input
                                className={styles.edit_email}
                                value={comment.email}
                                name='email'
                                onChange={handleChange}
                                placeholder='Email' />
                        </div>
                        <div>
                            <input
                                className={styles.edit_comment}
                                value={comment.comment}
                                name='comment'
                                onChange={handleChange}
                                placeholder='Add a comment...' />
                        </div>
                    </form>
                </div>
                <div className={styles.button}>
                    <button
                        style={{
                            width: '8.5rem',
                            height: '2.5rem',
                            fontSize: 17,
                            borderRadius: '5px',
                            borderColor: 'darkgrey'
                        }}
                        onClick={handleEdit}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default EditComment