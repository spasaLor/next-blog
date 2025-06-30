'use client';
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import SubmitButton from "./submitButton";
import styles from './loginReg.module.css';

export default function Form(){
    const formRef=useRef(null);
    const nav = useRouter();
    const [errors,setErrors]=useState([]);

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const res = await fetch("/api/author/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({username:formData.get('username'),password:formData.get('password')})
        });
        const json = await res.json();
        if(res.ok){
            localStorage.setItem('token',json.token);
            localStorage.setItem('user',json.user);
            nav.push("/author/private/new_post");
        }
        else
            setErrors(json.errors);
    }

    return(
        <>
            <form ref={formRef} onSubmit={handleSubmit} className={styles["login-res-form"]}>
                {errors && <div className={styles["errors"]}> {errors.map(item=>( <p>{item.message}</p> ))} </div> }
                <div className={styles["form-item"]}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required/>
                </div>
                <div className={styles["form-item"]}>
                    <label htmlFor="pwd">Password</label>
                    <input type="password" name="password" id="pwd" required/>
                </div>
                <SubmitButton text={"Enter"}/>
            </form>
        </>
        
    );
}