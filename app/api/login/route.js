import { NextResponse } from "next/server";

export async function POST(request) {
  const body= await request.json();
  const backendRes = await fetch('http://localhost:8080/login', {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await backendRes.json();
  if(!backendRes.ok)
    return NextResponse.json(data,{status:404});
  
  return NextResponse.json(data);
}
