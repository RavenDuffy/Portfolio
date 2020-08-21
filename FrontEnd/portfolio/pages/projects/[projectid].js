import Head from 'next/head'
import Meta from '../../components/meta.js'
import utilStyles from '../../styles/utils.module.css'
import { getAllProjectIds, getProjectData } from '../../lib/projects.js'

export default function Project({ projectData }) {
  if (process.browser) {
    document.body.style.transition = "none"
    document.body.style.background = "#333"
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
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
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
