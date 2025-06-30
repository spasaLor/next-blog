'use client';
import styles from "@/app/ui/homepage/home.module.css";

export default function ViewSelector({active,setActive}){    
    return(
            <div className={styles.selection}>
                <button id="latest" onClick={()=>setActive('latest')} className={active === 'latest'? styles.active :""}>Latest Posts</button>
                <button id="all" onClick={()=>setActive('all')} className={active === 'all'? styles.active : ""}>All Posts</button>
            </div>
    )
}