import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function AboutLayout() {
  return (
    <div className={styles.section} id="about" data-background="#333">
      <p className={styles.introText} data-aos="fade-up">Hi, I'm <span className={styles.importantText}>Raven</span>, a final year computer science student studying at
        Newcastle University. Currently <a href="mailto:ravenduffy@pm.me?subject=Hi%20Raven!">available</a> for
        any small project work.
      </p>
      <div className={styles.infoContainer}>
        <div className={styles.flexContainer} data-aos="fade-up-left">
          <h3 className={utilStyles.noSelect}>Experience</h3>
          <div className={styles.outlineContainer}>
            <p>2019 - 2020 : IT Associate Manager at <a target="_blank" href="https://www.pg.co.uk/">P&G</a></p>
            <p>2018 : Teaching Assistant at <a target="_blank" href="https://www.connectech.bm/">Connectech</a></p>
            <p>2018 : TLF App Dev at <a target="_blank" href="https://www.tlf.bm/">TLF</a></p>
            <p>2017 : Junior Instructor at <a target="_blank" href="https://wizkidcoding.com/">WizKidCoding</a></p>
          </div>
        </div>
        <div className={styles.flexContainer} data-aos="fade-up-right">
          <h3 className={utilStyles.noSelect}>Socials</h3>
          <div className={styles.outlineContainer}>
            <p><a target="_blank" href="mailto:ravenduffy@pm.me?subject=Hi%20Raven!">ravenduffy@pm.me</a></p>
            <p><a target="_blank" href="https://www.linkedin.com/in/ravenduffy/">LinkedIn</a></p>
            <p><a target="_blank" href="https://github.com/ravenduffy/">GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
