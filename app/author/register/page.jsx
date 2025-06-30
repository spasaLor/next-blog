import Form from "@/app/ui/forms/authorReg";
import styles from '@/app/ui/forms/loginReg.module.css';

export default function AuthorRegistration(){
    return(
        <div className={styles["author-form-container" ]}>
            <div className={styles["top-row"]} style={{marginBottom: "-20px"}}>
                <h2 style={{textAlign: "center", textTransform: "none"}}>Become an <b style={{"color": "var(--color-primary)"}}>author</b> of</h2>
                <img src="/logo.png" alt="" height={80} width={100}/>
            </div>
            <Form/>
        </div>
    );
}
