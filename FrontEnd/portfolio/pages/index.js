import Head from 'next/head'
import Link from 'next/link'
import { siteTitle } from '../components/generic'
import utilStyles from '../styles/utils.module.css'

// export async function getStaticProps() {
//
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Hello</h1>
      </section>
    </>
  )
}
