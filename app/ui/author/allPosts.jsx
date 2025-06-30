'use client';
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import styles from "@/app/author/private/private.module.css";
import useFetchAllPosts from "@/app/hooks/useFetchAllPosts";

export default function AllPosts(){
    const [selection,setSelection]=useState('all');
    const posts = useFetchAllPosts();    
    const publishedPosts= posts.filter((item)=>item.is_published === true);
    const unpublishedPosts= posts.filter((item)=>item.is_published === false);
    const nav = useRouter();

    return(
        <>
            <div className={styles["select-box"]}>
                <select id={styles.postView} value={selection} onChange={(e)=>setSelection(e.target.value)}>
                    <option value="all">All</option>
                    <option value="published">Only Published</option>
                    <option value="unpublished">Only Unpublished</option>
                </select>
            </div> 
            <div className={styles["personal-allPosts"]}>
                {selection === 'published' && publishedPosts.map(item=>(
                    <div className={styles["personal-post-item"]} key={item.id} onClick={()=>nav.push("/blog/post/"+item.id)} style={{cursor:'pointer'}}>
                        <div className={styles.top}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <ArrowRight />
                        </div>
                        <div className={styles["post-info"]}>
                            <p>{item.published_at.split("T")[0]}</p>
                            <p className={styles.status}>✅ Published</p>
                        </div>
                    </div>
                ))}
                {selection === 'unpublished' && unpublishedPosts.map(item=>(
                    <div className={styles["personal-post-item"]} key={item.id}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <div className={styles["post-info"]}>
                            <p>{item.created_at.split("T")[0]}</p>
                            <p className={styles.status}>❌ Draft</p>
                        </div>
                    </div>
                ))}
                {selection === 'all' && posts.map(item=>(
                    <div className={styles["personal-post-item"]} key={item.id}>
                        <h2 className={styles.title}>{item.title}</h2>
                        <div className={styles["post-info"]}>
                            <p>{item.is_published ? item.published_at.split("T")[0] : item.created_at.split("T")[0]}</p>
                            <p className={styles.status}>{item.is_published ? "✅ Published" : "❌ Draft"}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}