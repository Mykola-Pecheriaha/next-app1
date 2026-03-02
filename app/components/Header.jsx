import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/photos" className={styles.link}>
          Фото +++
        </a>
        <a href="/social" className={styles.link}>
          Соцсеті +++++
        </a>
        <a href="mailto:example@example.com" className={styles.email}>
          example@example.com
        </a>
      </nav>
    </header>
  )
}
