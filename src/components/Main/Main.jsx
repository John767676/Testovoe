import React from 'react';
import GridList from "../GridList/GridList";
import PostForm from "../PostForm/PostForm";
import {useEffect, useState} from "react";
import axios from "axios";

const Main = () => {
    const [users,setUsers] = useState([])
    const [pages, setPages] = useState(1)
    const [click,setClick] = useState(1)
    const [position,setPositions] = useState([])
    const [token,setToken] = useState('')

    const showMore = (e) => {
        e.preventDefault()
        if (click < pages) {
            setClick(click + 1)
        }
    }

    useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            params: {
                page: click,
                count: 6,
            }
        }).then(({data}) => (setUsers(prevState => [...prevState, ...data.users]), setPages(data.total_pages)))
    },[click])

    useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions').then(({data}) => setPositions(data.positions))
    }, [])

    useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(({data}) => setToken(data.token))
    }, [])


    return (
        <main className='main'>
            <div className='container'>
                <section className="main__grid">
                     <h1 className="main__header">Working with GET request</h1>
                    <GridList users={users} />
                    <button className={click < pages ? "main__grid-button" : "none"} onClick={(e) => showMore(e)}>Show more</button>
                </section>
                <section className="main__post">
                    <h1 className="main__post-header">Working with POST request</h1>
                    <PostForm position={position} token={token}/>
                </section>
            </div>
        </main>
    );
};

export default Main;