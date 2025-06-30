import Link from "next/link";
import styles from "@/app/ui/homepage/home.module.css";
import Image from "next/image";
import {Saira_Extra_Condensed} from "next/font/google";

const saira = Saira_Extra_Condensed({
    subsets:['latin'],
    weight:['300','400','500']
});

export default function LatestPostsView({posts}){
    return(
        <div className={styles["home-posts-container"]}>            
            <div className={styles["home-main-post"]}>
            {posts.map((post,index)=>(
                index === 0 ? (
                    <Link href={"blog/post/"+post.id} key={post.id}>
                        <div className={styles["home-post"]} >
                            <div className={styles.cover}><Image src={post.img} alt="" width={600} height={400}/></div>
                            <div className={styles.text}>
                                <h2 className={saira.className}>{post.title}</h2>
                                <div>
                                    <p>{post.authors.pen_name}</p>
                                    <p>{post.published_at}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) 
            :
            null
            ))}
            </div>
            <div className={styles["home-side-post"]}>
                <p>Top Stories</p>
                <ul>
                    {posts.map((post,index)=>(
                        index !== 0 ? 
                        (
                        <li key={post.id}>
                            <Link href={"/blog/post/"+post.id}>
                                <div className={styles["home-post"]}>
                                    <div className={styles.left}>
                                        <h2>{post.title}</h2>
                                        <div>
                                            <p>{post.authors.pen_name}</p>
                                            <p>{post.published_at}</p>
                                        </div>
                                    </div>
                                    <div className={styles.img}> <Image src={post.img} alt="" width={80} height={80}/></div>
                                </div>
                            </Link>
                        </li> 
                        ): null
                    ))}
                </ul>
            </div>
        </div>
    );
}
