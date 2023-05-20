import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href="https://www.instagram.com/piotrkowalskisculptor/" target={"_blank"} >
        <img src="/instagram-logo.png" alt="Netlify Logo" className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
