import PostData from "@/app/ui/post/postData";
import styles from '@/app/ui/post/post.module.css';
import CommentsSection from "@/app/ui/post/commentsSection";
import { cache, Suspense } from "react";
import { notFound } from "next/navigation";

export const revalidate = 600;
 
export const getPost = cache(async(id)=>{
    const res = await fetch("http://localhost:8080/posts/"+id);
    if(res.ok){
        const json = await res.json();
        return json.post;
    }
    notFound();
})

export async function generateMetadata({params}){
    const {id} = await params;
    const post = await getPost(id);
    return {
        title:"MyBlog | "+post.title,
        description:"Viewing "+post.title+" post"
    }
}
export default async function ReadPost({params}){
    const {id} = await params;
    const post = await getPost(id);
    let d= new Date(post.published_at);
    d=d.toDateString();
    post.published_at = d;
    
    return(
        <main>
            <div className={styles["post-container"]}>
                <Suspense fallback={<p>Loading post info....</p>}>
                    <PostData post={post}/>
                </Suspense>
            </div>
            <Suspense fallback={<p>Loading post comments....</p>}>
                <CommentsSection post={post}/>
            </Suspense>
        </main>
    )
}