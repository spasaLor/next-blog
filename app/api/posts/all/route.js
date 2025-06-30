import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch('http://localhost:8080/posts/all');
    const json=await res.json();
    const formattedPosts=json.posts.map(item => {
        let date = new Date(item.published_at);
        date = date.toDateString();
        date = date.split(" ");
        item.published_at = date[1] + " " + date[2];
        return item;
    });
    return NextResponse.json({posts:formattedPosts});
}