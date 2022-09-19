import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PostComment from './PostComment'
import ShowComments from './ShowComments'

function Home() {

    const [allComments, setAllComments] = useState([])
    // const [loading, setLoading] = useState(false)

    const loadComments = async () => {
        // loading con try catch
        try {
            // setLoading(true)
            const response = await axios.get('http://localhost:4000/allcomments')
            setAllComments(response.data)
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        loadComments()
    }, [])

    return (
        <div>
            <div>
                <PostComment loadComments={loadComments} />
            </div>
            <div>
                <ShowComments allComments={allComments} loadComments={loadComments} />
            </div>
        </div>
    )
}

export default Home