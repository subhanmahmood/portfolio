import { motion, AnimatePresence } from "framer-motion"
import AuthProvider from "lib/contexts/AuthContext"
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as Fathom from 'fathom-client'

import 'tailwindcss/tailwind.css'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    Fathom.load('JLAPRQBL', {
      includedDomains: ['www.subhan.io']
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])


  return (
    <AuthProvider>
      <AnimatePresence>
        <ToastContainer
          position="top-center" />
        <Component {...pageProps} />
      </AnimatePresence>
    </AuthProvider>
  )
}

export default MyApp
