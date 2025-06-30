import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function DELETE(request){
    const authHeader = await request.headers.get('authorization');
    const token = authHeader ? authHeader.split(" ")[1]: null;
    const body = await request.json();

    if(!token)
        return NextResponse.json({status:500});
    const res = await fetch("http://localhost:8080/authors/delete_post",{
        method:'DELETE',
        headers:{'Authorization':"Bearer "+token,"content-type":"application/json"},
        body: JSON.stringify(body)
    });
    if(res.ok){
        revalidatePath("/author/private/all_posts");
        return NextResponse.json({status:200});
    }
    else{
        return NextResponse.json({status:500});
    }
}