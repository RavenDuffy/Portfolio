import Head from 'next/head'
import Link from 'next/link'
import styles from './home.layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Raven Duffy'
export const pageTitle = 'Raven Duffy'

export default function Layout({children}) {
  return (
    <div className={styles.mainContainer}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta
          name="Raven Duffy"
          content="Raven Duffy's portfolio"
        />
        <meta name="title" content={pageTitle} />
      </Head>
      <div className={styles.hero}>
        <header className={styles.header}>
          <Link href="/">
            <h1 className={`${styles.largeCenterHeader} ${utilStyles.noSelect}`}>{name}</h1>
          </Link>
        </header>
        <div className={`${styles.rowContainer} ${utilStyles.noSelect}`}>
          <Link href="#about"><h1>About</h1></Link>
          <Link href="#"><h1>Showcase</h1></Link>
          <Link href="#"><h1>Contact</h1></Link>
        </div>
        <div className={styles.flexContainer}>
          <Link href="#about">
            <img
              src="images/down.svg"
              className={`${styles.downArrow} ${utilStyles.noSelect}`}
              alt={"down-arrow"}
            />
          </Link>
        </div>
      </div>
      <main>{children}</main>
    </div>
  )
}
