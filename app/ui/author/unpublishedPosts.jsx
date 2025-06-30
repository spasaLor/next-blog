'use client';
import NewPost from "@/app/ui/author/newPost";
import useFetchUnpublished from "@/app/hooks/useFetchUnpublished";
import styles from "@/app/author/private/private.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Unpublished(){
    const [toEdit,setToEdit]=useState(null);
    const posts = useFetchUnpublished();
    const nav = useRouter();

    const publishPost = async(id)=>{
        const res = await fetch("/api/author/publish",
            {
                method:'PUT',headers:{authorization:"bearer "+localStorage.getItem('token'), "content-type":"application/json"},
                body: JSON.stringify({postId:id})
        });
        if(!res.ok)
            console.log(json.message);
        nav.push("/author/private/all_posts");
    }

    const editPost = async(id,title,img,content)=>{
        setToEdit({id,title,img,content});
    }

    const deletePost = async(id)=>{
        const res = await fetch("/api/author/delete_post",{
            method:"DELETE",
            headers:{authorization:"bearer "+localStorage.getItem('token'), "content-type":"application/json"},
            body:JSON.stringify({postId:id})
        });
        if(!res.ok){
            const json = await res.json();
            console.log(json.message);
        }
        nav.push("/author/private/all_posts");        
    }

    return(
            toEdit ? <NewPost postId={toEdit.id} title={toEdit.title} img={toEdit.img} content={toEdit.content}/> :
            <div className={styles["personal-allPosts"]}>
                {posts.map(item=>(
                    <div className={styles["personal-post-item"]} key={item.id}>
                        <h2 className={styles.title}>{item.title}</h2> 
                        <div className={styles["post-info"]}>
                            <p>Saved: {item.created_at}</p>
                            <div className={styles.btns}>
                                <button style={{color: "var(--color-primary)"}}onClick={()=>publishPost(item.id)}>Publish</button>
                                <button style={{color: "var(--color-warn)"}} onClick={()=>editPost(item.id,item.title,item.img,item.content)}>Edit</button>
                                <button style={{color: "var(--color-error)"}} onClick={()=>deletePost(item.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
    );

}