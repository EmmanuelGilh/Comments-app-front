import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import PostComment from './PostComment'
import ShowComments from './ShowComments'
import styles from './Home.module.css'

function Home() {

    const [allComments, setAllComments] = useState([])

    const isLoading = useRef(false)


    const loadComments = async () => {
        // loading
        try {
            // setLoading(true)
            const response = await axios.get('http://localhost:4000/allcomments')
            isLoading.current = false
            setAllComments(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isLoading.current) {
            return
        }
        isLoading.current = true
        loadComments()
    }, [])


    return (
        <div className={styles.home_container}>
            <div className={styles.home_box}>
                <div className={styles.home_post}>
                    <PostComment loadComments={loadComments} />
                </div>
                <div className={styles.home_show}>
                    <ShowComments allComments={allComments} loadComments={loadComments} />
                </div>
            </div>
        </div>
    )
}

export default Home