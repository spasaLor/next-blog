import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(request){
    const body = await request.json();
    const authHeader = request.headers.get("authorization");
    const token = authHeader ? authHeader.split(" ")[1] : null;
    if(!token)
        redirect("/blog");

    const res = await fetch("http://localhost:8080/authors/register",{
        method:'POST',
        headers:{
            Authorization:"Bearer "+token,
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name:body.name,
            surname:body.surname,
            img:body.img,
            bio:body.bio
        })
    });
    const data = await res.json();
    if(res.ok)
        return NextResponse.json(data,{status:200});
    else
        return NextResponse.json(data,{status:500});
}