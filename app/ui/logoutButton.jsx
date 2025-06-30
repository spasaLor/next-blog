'use client';
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

export default function LogoutButton(){
    const router = useRouter();
    const handleLogout = async(e)=>{
        e.preventDefault();
        const res=await fetch("/api/logout");
        if(res.ok){
            localStorage.clear();
            router.push("/blog?refresh="+Date.now());
        }
        else{
            console.log("Error");
        }
    }

    return(
        <button type="button" onClick={handleLogout} className={styles.logout}>Logout</button>
    )
}