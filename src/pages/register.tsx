import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebaseApp from '../lib/firebase'

export default function CreateAccount(){

    const auth = getAuth(firebaseApp)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleSubmit = (e:any)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password = e.target.password.value
        setEmail(email)
        setPassword(password)
        createUserWithEmailAndPassword(email, password)
     
    }
 
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading) {
        return <p>Loading...</p>;
      }
      if (user) {
        return (
          <div>
            <p>Registered User: {user.user.email}</p>
          </div>
        );
      }



    return <>
    <h3 className="font-thin text-2xl mb-4">Create Account</h3>
     <form onSubmit={handleSubmit}>
     <input type="email" name='email' placeholder='email' className='p-4 mx-2 mb-2 rounded-lg' />
      <input type="password" name='password' placeholder='******' className='p-4 mx-2 rounded-lg' />
      <button className='bg-indigo-500 p-2 text-white rounded-lg mt-4' type='submit'>Create Account</button>
    
     </form>
    </>
}