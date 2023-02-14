import firebaseApp from '@/lib/firebase';
import { getAuth } from 'firebase/auth';
import { useSignOut } from 'react-firebase-hooks/auth';

const SignOut = () => {
  const auth = getAuth(firebaseApp)
  const [signOut, loading, error] = useSignOut(auth);

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
  return (
    <div className="App">
      <button
      className='bg-red-400'
        onClick={async () => {
          const success = await signOut();
          if (success) {
            alert('You are sign out');
          }
        }}
      >
        Sign out
      </button>
    </div>
  );
};


export default SignOut