import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import styles from './layout.module.css'

export default function ContactLayout() {
  return (
    <div className={styles.section} id="contact">
      <form className={styles.inlineForm}>
        <label htmlFor="name">My name is </label>
        <input type="text" name="name" className={styles.nameInput} id="name" placeholder="John Doe" required></input>.
        <br />
        <label htmlFor="topic">I want to create a </label>
        <input type="text" name="topic" className={styles.topicInput} id="topic" placeholder="Website, App, etc..." required></input>
        <label htmlFor="completeDate"> and I'd like it finished by </label>
        <input type="date" name="completeDate" className={styles.completeDateInput} id="completeDate" defaultValue="2020-07-24" required></input>.
        <br />
        <label htmlFor="budget">I have a budget of $</label>
        <input type="text" name="budget" className={styles.budgetInput} id="budget" placeholder="4000" required></input>
        <label htmlFor="email"> and I'd like to be contacted via </label>
        <input type="email" name="email" className={styles.emailInput} id="email" placeholder="JohnDoe@email.com" required></input>.
      </form>
    </div>
  )
}
