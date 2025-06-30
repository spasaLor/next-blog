import { NextResponse } from "next/server";

export async function POST(request){
    const body = await request.json();
    const res = await fetch("http://localhost:8080/register",{
        method:'POST',
        headers:{"content-type":"application/json"},
        body: JSON.stringify({username:body.username,password:body.password})
    });
    if(res.ok){
        const data = await res.json();
        return NextResponse.json(data,{status:200});
    }
    else{
        const data= await res.json();
        return NextResponse.json(data,{status:500});
    }
}