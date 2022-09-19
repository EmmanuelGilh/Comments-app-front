import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'



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
        <div>
            <ul>
                {
                    allComments.map(c => (
                        <div key={c.id}>
                            <div>
                                {c.email}
                            </div>
                            <div>
                                {c.comment}
                            </div>
                            <div>
                                <Link to={`/edit/${c.id}`}>
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(c.id)}>
                                    Delete
                                </button>
                            </div>
                        </div>))
                }
            </ul>
        </div>
    )
}

export default ShowComments