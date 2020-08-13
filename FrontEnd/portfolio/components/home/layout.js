import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import NavArrow from '../navarrow.js'

export const name = 'Raven Duffy'
export const pageTitle = 'Raven Duffy | Anything you need to know about me'
const description = `Hi I'm Raven Duffy, an up-and-coming developer with a \
focus on web development. You can find links to any of my \
socials and as well as previous projects here. `

const Scroll = dynamic(
  () => {
    return import("../scripts/scroll.js");
  },
  { ssr: false }
)

export default function Layout({children}) {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="Raven Duffy" content="Raven Duffy's portfolio" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />

        <meta itemprop="name" content={pageTitle} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content="images/NoBackRaven.png" />
      </Head>
      <div className={styles.hero}>
        <header className={styles.header}>
          <Link href="/">
            <h1 className={`${styles.largeCenterHeader} ${utilStyles.noSelect}`}>{name}</h1>
          </Link>
          <div className={`${styles.navContainer} ${utilStyles.noSelect}`}>
            <Link href="#about"><h1>About</h1></Link>
            <Link href="#showcase"><h1>Showcase</h1></Link>
            <Link href="#contact"><h1>Contact</h1></Link>
          </div>
        </header>
        <NavArrow target="about"/>
      </div>
      <main>{children}</main>
      <Scroll />
    </div>
  )
}
