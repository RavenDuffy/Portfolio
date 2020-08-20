import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function ShowcaseLayout({ home, allProjectData }) {
  console.log("d")
  return (
    <div className={styles.section} id="showcase" data-background="#259ed9">
      { home ? (
        <>
          <ul className={utilStyles.list}>
            { allProjectData.map(({ id, data, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>

        </>
      )}
    </div>
  )
}
