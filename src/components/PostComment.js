import React, { useState } from 'react'
import axios from 'axios'
import { isEmail } from '../utils'
import styles from './PostComment.module.css'

function PostComment({ loadComments }) {

    const [newComment, setNewComment] = useState({ email: '', comment: '' })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newComment.email.length !== 0 || newComment.comment.length !== 0) {
            if (!isEmail(newComment.email)) {
                return
            }
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setNewComment({ ...newComment, [name]: value })
    }

    const handleClear = () => {
        setNewComment({ email: '', comment: '' })
    }



    return (
        <div className={styles.post_container}>
            <div>
                <h1 className={styles.post_h1}>Leave comments</h1>
            </div>
            <div>
                <form>
                    <div>
                        <input
                            className={styles.post_email}
                            value={newComment.email}
                            name='email'
                            onChange={handleChange}
                            placeholder='Email' />
                    </div>
                    <div>
                        <input
                            className={styles.post_comment}
                            value={newComment.comment}
                            name='comment'
                            onChange={handleChange}
                            placeholder='Add a comment...'
                        />
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
                    onClick={handleSubmit}>Comment</button>
            </div>
        </div>
    )
}

export default PostComment