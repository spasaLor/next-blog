import { NextResponse } from "next/server";

export async function GET(request){
    const authHeader = await request.headers.get('authorization');
    const token = authHeader ? authHeader.split(" ")[1]: null;
    if(!token)
        return NextResponse.json({status:500});
    const res = await fetch("http://localhost:8080/authors/all_unpublished_from_author",{headers:{'Authorization':"Bearer "+token},next:{revalidate:60}});
    const data = await res.json();
    return NextResponse.json(data,{status:200});
}