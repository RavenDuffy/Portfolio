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
      <div className={styles.section} id="about">
        <p className={styles.introText}>Hi, I'm <span className={styles.importantText}>Raven</span>, a final year computer science student studing at
          Newcastle University. Currently <a href="mailto:ravend2013@gmail.com?subject=Hi%20Raven!">available</a> for
          any small project work.
        </p>
        <div className={styles.infoContainer}>
          <div className={styles.flexContainer}>
            <h3>Experience</h3>
            <div className={styles.outlineContainer}>
              <p>2019 - 2020 : IT Associate Manager at <a target="_blank" href="https://www.pg.co.uk/">P&G</a></p>
              <p>2018 : Teaching Assistant at <a target="_blank" href="https://www.connectech.bm/">Connectech</a></p>
              <p>2018 : TLF App Dev at <a target="_blank" href="https://www.tlf.bm/">TLF</a></p>
              <p>2017 : Junior Instructor at <a target="_blank" href="https://wizkidcoding.com/">WizKidCoding</a></p>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <h3>Socials</h3>
            <div className={styles.outlineContainer}>
              <p><a target="_blank" href="https://www.linkedin.com/in/ravenduffy/">LinkedIn</a></p>
              <p><a target="_blank" href="https://github.com/ravenduffy/">GitHub</a></p>
            </div>
          </div>
        </div>
        <div className={`${styles.flexContainer}`}>
          <Link href="#showcase">
            <img
              src="images/down.svg"
              className={`${styles.downArrow} ${utilStyles.noSelect}`}
              alt={"down-arrow"}
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
