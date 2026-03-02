import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>© {new Date().getFullYear()} Мой сайт</div>
        <nav className={styles.nav}>
          <a href="/photos" className={styles.link}>
            Фото
          </a>
          <a href="/contacts" className={styles.link}>
            Контакты
          </a>
          <a href="mailto:example@example.com" className={styles.link}>
            example@example.com
          </a>
        </nav>
      </div>
    </footer>
  )
}
