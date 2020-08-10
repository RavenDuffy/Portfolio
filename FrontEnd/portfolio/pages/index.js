import Head from 'next/head'
import Link from 'next/link'
import Layout, { pageTitle } from '../components/home.layout.js'
import utilStyles from '../styles/utils.module.css'

// export async function getStaticProps() {
//
// }

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </Layout>
  )
}
