import Head from 'next/head'
import Link from 'next/link'
import styles from './home.layout.module.css'
import utilStyles from '../styles/utils.module.css'

const name = 'Raven'
export const pageTitle = 'Raven Duffy'

export default function Layout({children}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="images/RavenWhiteBack.png" />
        <meta
          name="Raven Duffy"
          content="Raven Duffy's portfolio"
        />
        <meta name="title" content={pageTitle} />
      </Head>
      <header className={styles.header}>
        <>
          <h1 className={`${styles.largeCenterHeader} ${utilStyles.noSelect}`}>{name}</h1>
          <img
            src="images/down.svg"
            className={`${styles.downArrow}`}
            alt={"down-arrow"}
          />
        </>
      </header>
      <main>{children}</main>
    </div>
  )
}
