import { useRef, useState } from 'react';
import AuthProvider, { useAuth } from 'lib/contexts/AuthContext';
import { useRouter } from 'next/router'
import Link from 'next/link'

function Login() {
    const router = useRouter()
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            login(emailRef.current.value, passwordRef.current.value);
            router.push('/');
        } catch (err) {
            console.log(err)
            setError('Failed to login');
        }
        setLoading(false);
    }

    return (
        <AuthProvider>
            <div className="max-w-[250px] mx-auto">
                <div className="rounded-md border border-neutral-200 shadow-md mt-12">
                    <div className="p-4">
                        <h2 className="text-2xl font-medium text-center mb-4">Log in</h2>
                        {error && <div className="p-2 bg-red-400 text-red-900 rounded text-center my-2">{error}</div>}
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                            <input className="p-2 rounded border-2 border-neutral-100 focus:outline-2 focus:outline-neutral-500" type="email" placeholder="Email" ref={emailRef} />
                            <input className="p-2 rounded border-2 border-neutral-100 focus:outline-2 focus:outline-neutral-500" type="password" placeholder="Password" ref={passwordRef} />
                            <button disabled={loading} className="py-3 bg-black rounded text-white mt-3" type="submit">Log in</button>
                        </form>
                        <div className="w-full text-center mt-3">
                            <Link href="/forgot-password">
                                <a className="text-sm text-neutral-500">Forgot password?</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link href="/auth/signup"><a className="text-neutral-500">Click here</a></Link>
                </div>
            </div>
        </AuthProvider>
    )
}

export default Login;