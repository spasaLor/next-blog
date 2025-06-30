'use client';
import Link from "next/link";
import LogoutButton from "@/app/ui/logoutButton";
import Image from "next/image";
import style from "./navbar.module.css";
import useFetchMe from "../hooks/useFetchMe";

export default function Navbar({activeSegment}){
    const role = useFetchMe();

    const isAuthorPage = activeSegment === 'author';
    return(
        (role === 'visitor' ? <nav> <div className={isAuthorPage ? style.authorNav : style.navcontainer}> <Link href='/'><Image src='/logo.png' alt='' width={70} height={70}/></Link><div className={style.right}><Link href='/login'>Log In</Link><Link href='/register'>Sign Up</Link> </div> </div> </nav> : 
         role === 'user' ? <nav> <div className={isAuthorPage ? style.authorNav : style.navcontainer}> <Link href='/'><Image src='/logo.png' alt='' width={70} height={70}/></Link><div className={style.right}><Link href='/author/signup' id='become'>author signup</Link></div> <LogoutButton/> </div></nav> :
         <nav> <div className={isAuthorPage ? style.authorNav : style.navcontainer}> <Link href='/'><Image src='/logo.png' alt=''width={70} height={70}/></Link><div className={style.right}><Link href='/author/login' id='login'>author login</Link> <LogoutButton/> </div> </div></nav>
        )
    );
}