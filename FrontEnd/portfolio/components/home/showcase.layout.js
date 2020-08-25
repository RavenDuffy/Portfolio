import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function ShowcaseLayout({ allProjectData }) {
  return (
    <div className={styles.section} id="showcase" data-background="#111">
      <ul className={`${utilStyles.list} ${styles.projectLists}`}>
        { allProjectData.map(({ id, picture, title }) => (
          <li className={styles.projectListItem} key={id}>
            <Link href="/projects/[projectid]" as={`/projects/${id}`}>
                <a className={styles.showcaseProject}>
                  <img src={picture} alt={title}/>
                  <p>{title}</p>
                </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
