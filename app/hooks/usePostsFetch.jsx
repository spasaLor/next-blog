'use client';
import { useState, useEffect } from "react";
export default function usePostsFetch(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await fetch("api/posts/all",{cache:'no-cache'});
            const json= await res.json();
            setPosts(json.posts);            
        }
        fetchPosts();
    },[]);
    return posts;
}
