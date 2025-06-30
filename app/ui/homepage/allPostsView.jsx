import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/homepage/home.module.css';

export default function AllPostsView({posts}){
    return(
        <div className={styles["home-allPosts"]}>
                {posts.map(post=>(
                    <Link href={"blog/post/"+post.id} key={post.id}>
                        <div className={styles["home-allPosts-post"]} >
                            <div className={styles["home-allPosts-img"]}><Image src={post.img} width={500} height={300} alt={post.title}/></div>
                            <div className={styles["home-allPosts-text"]}>
                                <h2>{post.title}</h2>
                                <div>
                                    <p>{post.authors.pen_name}</p>
                                    <p>{post.published_at}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}                
        </div>
    );
}