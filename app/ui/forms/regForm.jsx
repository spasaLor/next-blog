'use client';
import { useRef, useState } from 'react';
import SubmitButton from './submitButton';
import { useRouter } from 'next/navigation';
import styles from '@/app/ui/forms/loginReg.module.css';

export default function Form(){
    const formRef= useRef(null);
    const [err,setErr]=useState([]);
    const router= useRouter();

    const handleReg = async(e)=>{
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const res = await fetch("/api/register",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({username:formData.get("username"),password:formData.get("password")})
        });
        const json=await res.json();
        console.log(json);
        if(!res.ok)
            setErr(json.errors);
        else{
            router.push(json.redirect);
        }
    }

    return(
        <form onSubmit={handleReg} ref={formRef} className={styles['login-res-form']}>
            {err.length>0 && 
            <div className={styles["errors"]}> {
                err.map((item,id)=>(<p key={id}>{item.message || item.msg}</p>))
                } 
            </div> 
        }
            <div className={styles["form-item"]}><label htmlFor="username">Username</label><input type="text" name="username" id="username" required/></div>
            <div className={styles["form-item"]}><label htmlFor="password">Password</label><input type="password" name="password" id="password" required/></div>
            <SubmitButton text={"enter"}/>
        </form>
    );
}