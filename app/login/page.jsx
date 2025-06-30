import styles from '@/app/ui/forms/loginReg.module.css';
import Form from '../ui/forms/loginForm';

export default function UserLogin(){
    return(
        <>
            <div className={styles["login-form-container"]}>
                <div className={styles["top-row"]}>
                    <img src="logo.png" alt="" width={100} height={80}/>
                    <h2>Login</h2>
                </div>    
                <Form/>            
            </div>
        </>
    );
}