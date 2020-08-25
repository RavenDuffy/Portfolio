import Head from 'next/head'
import Link from 'next/link'
import Meta from '../../components/meta.js'
import BackToHome from '../../components/backtohome.js'
import BackToTop from '../../components/backtotop.js'
import NavArrow from '../../components/navarrow.js'
import utilStyles from '../../styles/utils.module.css'
import styles from '../../components/projects/layout.module.css'
import { getAllProjectIds, getProjectData } from '../../lib/projects.js'

export default function Project({ projectData }) {
  let target;
  if (process.browser) {
    document.body.style.background = "#333"
    target = document.location.pathname

    const root = document.documentElement;
    const img = (projectData.gif)
      ? projectData.gif
      : (projectData.picture)
        ? projectData.picture
        : 'http://via.placeholder.com/800/000'
    root.style.setProperty('--projectBackground', `url(${img})`)
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
      <div className={styles.headerLayout}>
        <h1>{`The ${projectData.title} Project`}</h1>
        <NavArrow target="#main" invert idle />
      </div>
      <div id="main" className={`${utilStyles.mainContainer}`}>
        <div className={`${utilStyles.section}`}>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </div>
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
