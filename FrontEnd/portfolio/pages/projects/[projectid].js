import Head from 'next/head'
import Link from 'next/link'
import Meta from '../../components/meta.js'
import Nav from '../../components/nav.js'
import utilStyles from '../../styles/utils.module.css'
import { getAllProjectIds, getProjectData } from '../../lib/projects.js'

export default function Project({ projectData }) {
  let target;
  if (process.browser) {
    document.body.style.transition = "none"
    document.body.style.background = "#333"
    target = document.location.pathname
  }
  return (
    <>
      <Head>
        <Meta
          name={encodeURI(`The ${projectData.title} Project`)}
          pageTitle={encodeURI(`The ${projectData.title} Project`)}
          description={encodeURI("non")}
        />
      </Head>
      <header>
        <Nav />
      </header>
      <div className={`${utilStyles.flexCenterContainer} ${utilStyles.clearNav}`}>
        <div
          className={utilStyles.section}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.projectid);
  return {
    props: {
      projectData
    }
  }
}
