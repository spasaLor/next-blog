import Form from "@/app/ui/forms/authorLogin";
import styles from '@/app/ui/forms/loginReg.module.css';

export default function AuthorLogin(){
    return(
        <div className={styles["login-form-container"]}>
            <div className={styles["top-row"]}>
                <img src="/logo.png" alt="" width={100} height={80}/>
                <h2 style={{textTransform: "none"}}>Login as</h2><h2 style={{color:"var(--color-warn)",display:"inline",marginLeft:"8px"}}>author</h2>
            </div>
            <Form/>
        </div>
    );
}