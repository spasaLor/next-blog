'use client';
import { useState } from "react";
import ViewSelector from './viewSelector';
import usePostsFetch from "@/app/hooks/usePostsFetch";
import LatestPostsView from "./latestPostsView";
import AllPostsView from "./allPostsView";

export default function BlogFeed(){
    const [active,setActive]=useState('latest');
    const posts = usePostsFetch();
    const latestPosts = posts.slice(0,5);

    return(
        <>
            <ViewSelector active={active} setActive={setActive}/>
            {active ==='latest' ? <LatestPostsView posts={latestPosts}/> : <AllPostsView posts={posts}/>} 
        </>
    )
    

}