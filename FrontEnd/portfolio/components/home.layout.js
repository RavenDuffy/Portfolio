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
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Raven Duffy"
          content="Raven Duffy's portfolio"
        />
        <meta name="title" content={pageTitle} />
      </Head>
      <header className={styles.header}>
        <>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
          <img
            src="images/down.svg"
            className={`${styles.downArrow}`}
            alt={"down-arrow"}
          />
        </>
      </header>
    </div>
  )
}
