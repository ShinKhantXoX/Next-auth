'use client'
import Link from "next/link"
import { signIn,signOut,useSession } from "next-auth/react"


function AuthButton () {
    const { data : session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name} <br />
                <button onClick={() => signOut()}>Sign Out</button>
            </>
        )
    }

    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn('github')}>Sign In with github</button>
            <br />
            <button onClick={() => signIn('google')}>Sign in with google</button>
            <br />
            <button onClick={() => signIn('facebook')}>Sign in with facebook</button>
        </>
    )

}   

export default function NavMenu () {
    return (
        <div>
            <AuthButton />
        </div>
    )
}