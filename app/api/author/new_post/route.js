import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request){
    const authHeader = await request.headers.get('authorization');
    const token = authHeader ? authHeader.split(" ")[1]: null;
    const body = await request.json();
    const res = await fetch("http://localhost:8080/authors/new_post",{method:"POST",headers:{
            authorization:'bearer '+token,
            "content-type":"application/json",
        },
            body: JSON.stringify(body)
        });
    if(res.ok){
        revalidatePath("/blog/author/private");
        return NextResponse.json({status:200});
    }else{
        return NextResponse.json({status:500});
    }
}