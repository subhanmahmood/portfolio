import { useRef, useState } from 'react';
import AuthProvider, { useAuth } from 'lib/contexts/AuthContext';
import { useRouter } from 'next/router'
import Link from 'next/link'

function SignUp() {
    const router = useRouter()
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            signup(emailRef.current.value, passwordRef.current.value);
            router.push('/');
        } catch (err) {
            console.log(err)
            setError('Failed to create account');
        }
        setLoading(false);
    }

    return (
        <AuthProvider>
            {/* <div className="max-w-[250px] mx-auto">
                <div className="rounded-md border border-stone-200 shadow-md mt-12">
                    <div className="p-4">
                        <h2 className="text-2xl font-medium text-center mb-4">Sign Up</h2>
                        {error && <div className="p-2 bg-red-400 text-red-900 rounded text-center my-2">{error}</div>}
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                            <input className="p-2 rounded border-2 border-stone-100 focus:outline-2 focus:outline-stone-500" type="email" placeholder="Email" ref={emailRef} />
                            <input className="p-2 rounded border-2 border-stone-100 focus:outline-2 focus:outline-stone-500" type="password" placeholder="Password" ref={passwordRef} />
                            <input className="p-2 rounded border-2 border-stone-100 focus:outline-2 focus:outline-stone-500" type="password" placeholder="Password confirmation" ref={passwordConfirmRef} />
                            <button disabled={loading} className="py-3 bg-black rounded text-white mt-3" type="submit">Sign Up</button>
                        </form>
                        <div className="w-full text-center mt-3">
                            <Link href="/forgot-password">
                                <a className="text-sm text-stone-500">Forgot password?</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-100 text-center mt-2">
                    Already have an account? <Link href="/auth/login"><a className="text-stone-500">Sign In</a></Link>
                </div>
            </div> */}
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-6xl font-medium">Unavailable</h1>
            </div>
        </AuthProvider>
    )
}

export default SignUp;