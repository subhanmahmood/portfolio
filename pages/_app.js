import { motion, AnimatePresence } from "framer-motion"

import 'tailwindcss/tailwind.css'
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
