import Head from 'next/head'
import Link from 'next/link'
import Layout, { name } from '../components/home/layout.js'
import AboutLayout from '../components/home/about.layout.js'
import ShowcaseLayout from '../components/home/showcase.layout.js'
import ContactLayout from '../components/home/contact.layout.js'
import utilStyles from '../styles/utils.module.css'
import styles from '../components/home/layout.module.css'
import { getSortedProjectData } from '../lib/projects.js'

// THIS FUNCTION CAN ONLY BE PLACED INSIDE FILES WITHIN THE PAGES DIRECTORY
export async function getServerSideProps() {
  const allProjectData = getSortedProjectData();
  return {
    props: {
      allProjectData
    }
  }
}

export default function Home({ allProjectData }) {
  if (process.browser) {
    document.body.style.transition = ".5s background"
  }

  return (
    <Layout>
      <Head>
        <title>{name}</title>
      </Head>
      <AboutLayout />
      <ShowcaseLayout allProjectData={allProjectData} />
      <ContactLayout />
    </Layout>
  )
}
