'use client';
import { useEffect, useState } from "react";
import styles from "@/app/author/private/private.module.css";
import { usePathname, useRouter } from "next/navigation";

export default function GreetingSelection(){
    const [active,setActive]=useState('new');
    const nav = useRouter();
    let user='';
    const pathname= usePathname();
    const parts=pathname.split("/");
    const page=parts[parts.length-1];

    useEffect(()=>{
        user = localStorage.getItem('user');
    },[]);

    useEffect(()=>{
        page === "all_posts" ? setActive('all') : page === "new_post" ? setActive('new') : setActive('unpublished');
    },[page]);

    const newClick = ()=>{
        setActive('new');
        nav.push("/author/private/new_post");
    }
    const allClick = ()=>{
        setActive('all');
        nav.push("/author/private/all_posts");
    }
    const unpClick = ()=>{
        setActive('unpublished');
        nav.push("/author/private/unpublished_posts");
    }
    
    return(
        <>
            <div className={styles.greeting}>
                <h2>Welcome to your personal area, {user}</h2>
                <i>From here you can manage your posts</i>
            </div>
            <div className={styles.selection}>
                <button type="button" className={active === 'new' ? styles.active:""} onClick={newClick}>New Post</button>
                <button type="button" className={active === 'all' ? styles.active:""} onClick={allClick}>All Posts</button>
                <button type="button" className={active === 'unpublished' ? styles.active:""} onClick={unpClick}>Unpublished</button>
            </div>
        </>
        
    );
     
}