import { notFound, redirect } from "next/navigation";
import styles from "@/app/ui/authors.module.css";
import Image from "next/image";
import Link from "next/link";
import {Saira_Extra_Condensed} from "next/font/google";
import { cache } from "react";
const saira = Saira_Extra_Condensed({
    subsets:['latin'],
    weight:['300','400','500']
});

export const revalidate=600;

export const getAuthor = cache(async(id)=>{
    const res = await fetch("http://localhost:8080/authors/"+id);
    const json = await res.json();
    if(res.ok)
        return json.info;
    else
        notFound();
})
export async function generateMetadata({params}){
    const {id} = await params;
    const author= await getAuthor(id);
    return{
        title:"MyBlog | "+author.pen_name+"'s page",
        description: "Author's page"
    }
}

export default async function AuthorInfo({params}){
    const {id} = await params;
    let author= await getAuthor(id);

    return(
       <main>
            <div className={styles["author-top-part"]+" "+saira.className}>
                <h1 id={styles["backgroundName"]}>{author.pen_name}</h1>
                <h1>{author.pen_name}</h1>
            </div>
            <div className={styles["author-bott"]}>
                <div className={styles["first"]}>
                    <Image src={author.img} width={100} height={100} alt=""/>
                </div>
                <div className={styles["author-text"]}>
                    <p>{author.bio}</p>
                </div>
            </div>
            <p id={styles["more"]}>more from {author.pen_name}</p>
            <div className={styles["author-posts-container"]}>
                {author.posts.map(item=>(
                    <Link href={"/blog/post/"+item.id} key={item.id}>
                        <div className={styles["author-post-item"]}>
                            <div className={styles["author-text"]}>
                                <h2>{item.title}</h2>
                                <div> <p>{author.pen_name}</p>  <p> {item.published_at}</p></div>
                            </div>
                            <div className={styles["img"]}>
                                <Image src={item.img} alt={item.title} width={150} height={150}/>
                            </div>
                        </div>
                    </Link>                    
                ))}
            </div>
        </main>
    );
}