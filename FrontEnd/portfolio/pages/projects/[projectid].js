import Head from 'next/head'
import Link from 'next/link'
import Meta from '../../components/meta.js'
import BackToHome from '../../components/backtohome.js'
import BackToTop from '../../components/backtotop.js'
import utilStyles from '../../styles/utils.module.css'
import { getAllProjectIds, getProjectData } from '../../lib/projects.js'

export default function Project({ projectData }) {
  let target;
  if (process.browser) {
    document.body.style.transition = "none"
    document.body.style.background = "#333"
    target = document.location.pathname
  }

  const projectTitle = `Raven Duffy | The ${projectData.title} Project`

  return (
    <>
      <Head>
        <title>{projectTitle}</title>
        <Meta
          name={projectData.title}
          pageTitle={projectTitle}
          description={"non"}
        />
      </Head>
      <header>
        <BackToHome />
      </header>
      <div className={`${utilStyles.mainContainer}`}>
        <div
          className={utilStyles.section}
          dangerouslySetInnerHTML={{ __html: projectData.contentHtml }}
        />
        <div className={utilStyles.flexCenterContainer}>
          <BackToTop target={target} visible />
        </div>
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
