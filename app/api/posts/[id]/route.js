import { NextResponse } from "next/server";

export async function GET(request,{params}){
    const {id}= await params;
    const res = await fetch("http://localhost:8080/posts/"+id);
    const postData = await res.json();

    return NextResponse.json(postData,{status:200});
}