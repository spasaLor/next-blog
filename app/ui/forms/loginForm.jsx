'use client';
import SubmitButton from "./submitButton";
import styles from './loginReg.module.css';
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Form(){
    const formRef = useRef(null);
    const [err,setErr] = useState();
    const router = useRouter();

    const loginForm = async(e)=>{
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const res = await fetch("/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({username:formData.get('username'),password:formData.get('password')})
        });
        const json = await res.json();

        if(!res.ok)
            setErr(json.error)
        else{
            localStorage.setItem('token',json.accessToken);
            router.push(json.redirect);
        }
    }

    return(
        <form onSubmit={loginForm} ref={formRef} className={styles["login-res-form"]}>
            {err && <div className={styles.errors}> <p>{err}</p></div> }
            <div className={styles["form-item"]}><label htmlFor="username">Username</label><input type="text" name="username" id="username" required/></div>
            <div className={styles["form-item"]}><label htmlFor="password">Password</label><input type="password" name="password" id="password" required/></div>
            <SubmitButton text={"enter"}/>
        </form>
    );
}