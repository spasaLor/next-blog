import { NextResponse } from "next/server";

export async function POST(request,{params}){
    const {id}= await params;
    const authHeader = request.headers.get("authorization");
    const token = authHeader ? authHeader.split(" ")[1] : null;
    const comment = await request.json();

    const res = await fetch("http://localhost:8080/posts/"+id+"/new_comment",{
        method:'POST',
        headers:{
                "Content-type":"application/json",
                Authorization:"bearer "+token,
            },
            body:JSON.stringify(comment)
    })
    if(res.ok)
        return NextResponse.json({message:"success",status:200});
    return NextResponse.json({message:"Error",status:500});

}