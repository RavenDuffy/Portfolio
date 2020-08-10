import Head from 'next/head'
import Link from 'next/link'
import Layout, { pageTitle } from '../components/home.layout.js'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/home.layout.module.css'

// export async function getStaticProps() {
//
// }

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className={`${styles.rowContainer} ${utilStyles.noSelect}`}>
        <h1>About</h1>
        <h1 className={utilStyles.extraLeftMargin}>Work</h1>
        <h1>Contact</h1>
      </div>
      <div className={styles.flexContainer}>
        <img
          src="images/down.svg"
          className={`${styles.downArrow} ${utilStyles.noSelect}`}
          alt={"down-arrow"}
        />
      </div>
    </Layout>
  )
}
