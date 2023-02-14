import firebaseApp from "@/lib/firebase"
import { getAuth } from "firebase/auth"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthState, useIdToken } from "react-firebase-hooks/auth"

export default function Dashboard(){
    const auth  = getAuth(firebaseApp)
    const [user,loading, error ] = useAuthState(auth)
    const router = useRouter()



    useEffect(() => {
        // disable the linting on the next line - This is the cleanest solution

        // void the Promise returned by router.push
        if (!(user || loading)) {
          void router.push('/signin')
        }
        // or use an async function, await the Promise, then void the function call
        // async function handleRouteChange() {
        //   if (!(user || loading)) {
        //     await router.push('/signin')
        //   }
        // }
        // void handleRouteChange()
      }, [user, loading])


  

    
 
    return <h1>Welcome, {user?.email}</h1>
}