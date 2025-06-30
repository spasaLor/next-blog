'use client';
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import styles from '@/app/ui/forms/loginReg.module.css';
import SubmitButton from "./submitButton";

export default function Form(){
    const [err,setErr]=useState([]);
    const formRef=useRef(null);
    const nav=useRouter();

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const res = await fetch("/api/author/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"bearer "+localStorage.getItem('token')
            },
            body: JSON.stringify({
                name:formData.get('name'),
                surname:formData.get('surname'),
                img:formData.get('img'),
                bio:formData.get('bio')
            })
        });
        const json=await res.json();
        if(!res.ok)
            setErr(json.errors);
        else
            nav.push(json.redirect);        
    }

    return(
        <form ref={formRef} onSubmit={handleFormSubmit} className={styles["login-res-form"]}>
            {err && <div className={styles["errors"]}> {err.map((item,id)=>(<p key={id}>{item.message || item.msg}</p>))} </div> }
            <div className={styles["form-item"]}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required/>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname" id="surname" required/>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor="img">Profile Picture</label>
                <input type="text" name="img" id="img" placeholder="image link"/>
            </div>
            <div className={styles["form-item"]}>
                <label htmlFor="bio">Tell us a bit about yourself</label>
                <textarea name="bio" id="bio" rows="5" className={styles.textarea} required></textarea>
            </div>
            <SubmitButton text={"Register"}/>
        </form>
    );
}