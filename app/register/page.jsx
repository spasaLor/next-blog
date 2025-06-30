import Form from "../ui/forms/regForm";
import styles from '@/app/ui/forms/loginReg.module.css';

export default function UserRegistration(){
    return(
        <>
            <div className={styles["login-form-container"]}>
                <div className={styles["top-row"]}>
                    <img src="logo.png" alt="" width={100} height={80}/>
                    <h2>Register</h2>
                </div>    
                <Form/>            
            </div>
        </>
    );
}