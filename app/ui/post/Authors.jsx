import{Facebook,Twitter,Link as LinkIcon} from 'lucide-react';
import Link from 'next/link';
import styles from './post.module.css';

export default function Authors({data}){
    return(
        <>
            <p>by <Link href={"/blog/author/"+data.authors.id}><b>{data.authors.pen_name}</b></Link></p>
            <p>{data.published_at}</p>
            <div className={styles.icons}>
                <LinkIcon strokeWidth={1.5}/>
                <Facebook strokeWidth={1.5}/>
                <Twitter strokeWidth={1.5}/>
            </div>
        </>
    );
    
}