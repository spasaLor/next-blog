import { NextResponse } from "next/server";

export async function POST(request){
    const body = await request.json();
    const res = await fetch("http://localhost:8080/authors/login",{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
    const data = await res.json();
    if(res.ok){
        return NextResponse.json(data,{status:200});
    }
    else{
        return NextResponse.json(data,{status:500});
    }
}