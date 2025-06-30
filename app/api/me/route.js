import { NextResponse } from "next/server";

export async function GET(request){
    const authHeader = request.headers.get('authorization');    
    const token = authHeader ? authHeader.split(" ")[1] : null;
    try {
        const res = await fetch("http://localhost:8080/me",{headers:{'Authorization':"Bearer "+token},cache:'no-cache'});
        const json = await res.json();
        return NextResponse.json(json,{status:200});
    } catch (error) {
        return NextResponse.json(null,{status:500});
    }

}