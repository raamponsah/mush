import firebaseApp from "@/lib/firebase"
import { getAuth } from "firebase/auth"
import Router, { useRouter } from "next/router"
import { useEffect } from "react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"

export default function SocialSigUp(){
    const auth = getAuth(firebaseApp)
    const [signInWithGoogle,user, loading, error] = useSignInWithGoogle(auth)
    const router = useRouter()

    useEffect(() => {
        if (!(user || loading)) {
          void router.push('/social')
        }

        if(user){
            void Router.push('/dashboard')
        }
        })

        return <>

        <button className="bg-slate-200 p-5 text-2xl font-medium" onClick={()=>signInWithGoogle()}>Sign in With Google</button>
    
    </>
}