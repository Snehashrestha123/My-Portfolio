import styles from '../styles/Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="container">
        <div className={styles['footer-inner']}>
          <div className={styles['footer-copy']}>
            © {currentYear} Sneha Shrestha. Built with React + Vite.
          </div>
          <div className={styles['footer-links']}>
            <a href="https://github.com/snehashrestha123" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sneha-shrestha-51a704253/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=snehashrestha357@gmail.com&subject=Portfolio Inquiry&body=Hello Sneha," target="_blank" rel="noopener noreferrer" title="Email" className={styles['contact-link']}>Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
