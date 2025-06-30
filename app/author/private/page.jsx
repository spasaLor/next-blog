'use client';

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page(){
    const nav = useRouter();
    useEffect(()=>{
        if(!localStorage.getItem('user'))
            nav.push("/blog");
    },[]);    
}


