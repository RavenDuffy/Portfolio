import '../styles/global.css'
import "aos/dist/aos.css"
import AOS from 'aos'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function App({ Component, pageProps, router }) {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  return (
    <motion.div key={ router.router } initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      }
    }}>
      <Component {...pageProps} />
    </motion.div>
  )
}
