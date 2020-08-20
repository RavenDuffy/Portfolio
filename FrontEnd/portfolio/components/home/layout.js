import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Meta from '../meta.js'
import NavArrow from '../navarrow.js'
import BackToTop from '../backtotop.js'


export const name = 'Raven Duffy'
export const pageTitle = 'Raven Duffy | Anything you need to know about me'
const description = `Hi I'm Raven Duffy, a full stack developer with a focus on \
web development. You can find links to my socials as well as a showcase of my \
previous projects here. `

const Scroll = dynamic(
  () => {
    return import("../../lib/scroll.js");
  },
  { ssr: false }
)

export default function Layout({children}) {
  return (
    <div className={styles.mainContainer} id="hero" data-background="#333333">
      <Head>
        <Meta
          name={encodeURI(name)}
          pageTitle={encodeURI(pageTitle)}
          description={encodeURI(description)}
        />
      </Head>
      <div className={styles.hero}>
        <header className={styles.header}>
          <Link href="/">
            <h1 className={`${styles.largeCenterHeader} ${utilStyles.noSelect}`}>{name}</h1>
          </Link>
          <div className={`${utilStyles.navContainer} ${utilStyles.noSelect}`}>
            <Link href="#about"><h1>About</h1></Link>
            <Link href="#showcase"><h1>Showcase</h1></Link>
            <Link href="#contact"><h1>Contact</h1></Link>
            <BackToTop target="/" />
          </div>
        </header>
        <NavArrow target="#about"/>
      </div>
      <main>{children}</main>
      <Scroll />
    </div>
  )
}
