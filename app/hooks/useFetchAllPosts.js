'use client';
import { useEffect, useState } from "react";

export default function useFetchAllPosts(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await fetch("/api/author/all_from_author",{
                headers:{'authorization': 'bearer '+localStorage.getItem('token')}
            });
            const json= await res.json();
            setPosts(json.posts);            
        }
        fetchPosts();
    },[]);
    return posts;
}