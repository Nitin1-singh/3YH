import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const auth = cookies().get("jwt")
  if(auth) {
    const res = await fetch("http://localhost:4000/user/verify",{
      method: "POST",
      body:JSON.stringify({token:auth.value}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    const data = await res.json()
    if(data.sucess)  return NextResponse.redirect(new URL('/home', request.url))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login","/register", ]

}