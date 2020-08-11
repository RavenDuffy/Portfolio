import Head from 'next/head'
import Link from 'next/link'
import Layout, { pageTitle } from '../components/home/layout.js'
import AboutLayout from '../components/home/about.layout.js'
import ShowcaseLayout from '../components/home/showcase.layout.js'
import ContactLayout from '../components/home/contact.layout.js'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/home/layout.module.css'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AboutLayout />
      <ShowcaseLayout />
      <ContactLayout />
    </Layout>
  )
}
