import Image from "next/image";
import LogoutButton from "../logoutButton";
import styles from "@/app/ui/navbar.module.css";

export default function Navbar(){
    return(
        <nav className={styles.personal}>
            <div className={styles["navcontainer"]}>
                <div className={styles.logo}><Image src='/logo.png' alt='' width={100} height={80}/></div>
                <div className={styles.right}>
                    <LogoutButton/>
                </div>
            </div>
        </nav>
    );    
}