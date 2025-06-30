import { Suspense } from "react";
import Authors from "./Authors";
import styles from "./post.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostData({post}){
    return(
        <div className={styles.post}>
            <div className={styles.top}>
                <div className={styles.pic}><Image src={post.img} alt="" width={800} height={600}/></div>
                <div className={styles.right}>
                    <Link href="/blog">blog /</Link> 
                    <h2>{post.title}</h2>
                    <div className={styles["writer-info"]}>
                        <Suspense fallback={<p>Loading author info....</p>}>
                            <Authors data={post}/>
                        </Suspense>
                    </div>
                </div>
            </div>
            <div className={styles.content} dangerouslySetInnerHTML={{__html:post.content}}>
            </div>
        </div>
    );
}