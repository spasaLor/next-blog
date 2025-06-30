import { useEffect, useState } from "react";

export default function useFetchMe(){
    const [role,setRole]=useState('visitor');
    useEffect(()=>{
        const fetchMe= async()=>{
            try {
                const res = await fetch("/api/me",{
                    headers:{
                        Authorization:'bearer '+localStorage.getItem('token')
                    }
                });
                if(res.ok){
                    const data = await res.json();
                    setRole(data.role);
                }
            } catch (error) {
                setRole('visitor');
            }
        }
        fetchMe();
    },[]);   
    return role;
}