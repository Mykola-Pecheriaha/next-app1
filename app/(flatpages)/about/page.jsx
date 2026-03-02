import Link from 'next/link'
import styles from './about.module.css'

export default function About() {
  return (
    <>
      <Link href="/contacts">
        <h1 className={styles.abouth1}>Go to Contacts</h1>
      </Link>
      <p
        style={{
          color: 'white',
          backgroundColor: 'black',
        }}
      >
        Hello World
      </p>
    </>
  )
}
