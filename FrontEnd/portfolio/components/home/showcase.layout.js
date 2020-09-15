import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function ShowcaseLayout({ allProjectData }) {
  let fade = ["fade-left", "fade-right"]

  return (
    <div className={styles.section} id="showcase" data-background="#111">
      <ul className={`${utilStyles.list} ${styles.projectLists}`}>
        { allProjectData.map(({ id, picture, title, projectId }) => (
          <motion.li className={styles.projectListItem}
                     key={id}
                     data-aos={fade[projectId % 2]}
                     whileHover={{
                       position: 'relative',
                       zIndex: 1,
                       scale: 1.05,
                       transition: {
                         duration: .1
                       }
                     }}
          >
            <Link href="/projects/[projectid]" as={`/projects/${id}`}>
                <a className={styles.showcaseProject}>
                  <img src={picture} alt={title}/>
                  <p>{title}</p>
                </a>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
