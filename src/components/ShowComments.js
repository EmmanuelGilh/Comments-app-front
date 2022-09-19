import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styles from './ShowComments.module.css'



function ShowComments({ allComments, loadComments }) {

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:4000/comments/${id}`)
                .then(() => {
                    console.log('deleted')
                    loadComments()
                })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className={styles.show_container}>
            <ul>
                {
                    allComments.map(c => (
                        <div key={c.id}>
                            <div className={styles.show_mail}>
                                {c.email}
                            </div>
                            <div className={styles.show_comment}>
                                {c.comment}
                            </div>
                            <div className={styles.show_links}>
                                <Link to={`/edit/${c.id}`}>
                                    Edit
                                </Link>
                                <Link onClick={() => handleDelete(c.id)}>
                                    Delete
                                </Link>
                            </div>
                        </div>))
                }
            </ul>
        </div>
    )
}

export default ShowComments