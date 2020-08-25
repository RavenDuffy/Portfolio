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
        <div className={styles.initial}>
          <div className={styles.projectSections}>
            <h1 style={{ "backgroundColor": Object.entries(projectData.colourMap)[0][1] }}>{`The ${projectData.title} Project`}</h1>
            <div id="sections" className={styles.selectSections}>
              { Object.entries(projectData.colourMap).slice(1, Object.entries(projectData.colourMap).length)
                .map((colour, id) => (
                <Link href={`#${colour[0]}`} key={id}>
                  <p className={styles.selectSection} style={{ "backgroundColor": colour[1] }}>{`${colour[0]}`}</p>
                </Link>
              ))}
            </div>
          </div>
          <img src={projectData.picture} alt="image"/>
        </div>
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
