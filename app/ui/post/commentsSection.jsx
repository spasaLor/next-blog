import Form from "../forms/commentForm";
import styles from "./post.module.css";
export default function CommentsSection({post}){
    return(
        <>
            <div className={styles.comments}>
                <h2>Comments</h2>
                {post.comments && (post.comments.map((item,id)=>(
                    <div className={styles.comment} key={id}>
                        <b>{item.username}</b>
                        <p dangerouslySetInnerHTML={{__html:item.content}}></p>
                    </div>
                )))}
            </div>
            <div className={styles["comment-box"]}>
               <Form postId={post.id}/>
            </div>
        </>
    );
}