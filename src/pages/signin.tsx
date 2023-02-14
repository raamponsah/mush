import firebaseApp from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

export default function Signin(){
    const auth = getAuth(firebaseApp)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const router = useRouter()

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        setEmail(e.target.email.value)
        setPassword(e.target.password.value)
        signInWithEmailAndPassword(email, password)  
    }

    useEffect(()=>{
        if(user){
             router.push('/dashboard')
        }
    },[user])

    return <>
        <h3 className="font-thin text-2xl mb-4">Sign into Account</h3>
        <small>{error?error.message:''}</small>
        <form onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='email' className='p-4 mx-2 mb-2 rounded-lg' />
        <input type="password" name='password' placeholder='*******' className='p-4 mx-2 rounded-lg' />
        <button className='bg-pink-500 p-2 text-white rounded-lg mt-4' type='submit'>{loading ? 'Loading...':'Sign In'}</button>
        </form>
        </>
}