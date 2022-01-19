import { motion, AnimatePresence } from "framer-motion"
import AuthProvider from "lib/contexts/AuthContext"

import 'tailwindcss/tailwind.css'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </AuthProvider>
  )
}

export default MyApp
