import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch("http://localhost:8080/logout");
    if(res.ok)
        return NextResponse.json({status:200});
    else
        return NextResponse.json({status:500});
}