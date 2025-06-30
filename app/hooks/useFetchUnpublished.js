import { useEffect, useState } from "react";

export default function useFetchUnpublished(){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        const fetchPosts =async()=>{
            const res = await fetch("/api/author/all_unpublished_from_author",
                {headers:{authorization:"bearer "+localStorage.getItem('token')},next:{revalidate:30}}
            );
            const json = await res.json();
            if(res.ok){
                json.posts.forEach(item=>{
                    const d = new Date(item.created_at);
                    const date = d.toLocaleString();
                    item.created_at = date;
                })
                setPosts(json.posts);
            }
        }
        fetchPosts();
    },[]);
    return posts;
}