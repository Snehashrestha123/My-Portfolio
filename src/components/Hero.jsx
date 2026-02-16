import styles from '../styles/Hero.module.css'
import buttonStyles from '../styles/Button.module.css'
import profile from "../assets/profile.jpg";


const Hero = () => {
  const handleContactClick = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles['hero-grid']}>
          <div>
            <div className={styles['hero-intro']}>Hi, I'm</div>
            <h1>Sneha Shrestha</h1>
            <div className={styles['hero-role']}>Software Developer</div>
            <p className={styles['hero-bio']}>
              BIM graduate from Shanker Dev Campus passionate about building web applications. 
              Currently focused on MERN stack development.
            </p>
            <div className={styles['hero-actions']}>
              <button onClick={handleContactClick} className={`${buttonStyles.btn} ${buttonStyles['btn-primary']}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in Touch
              </button>
              <a href="/Sneha Shrestha_CV.pdf" download="Sneha Shrestha_CV.pdf" className={`${buttonStyles.btn} ${buttonStyles['btn-secondary']}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
          {/* <div>
            <div className={styles['hero-photo-area']}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="m21 15-5-5L5 21"/>
              </svg>
              <span>Your professional photo<br/>or a custom illustration</span>
            </div>
          </div> */}

          <div>
              <div className={styles['hero-photo-area']}>
               <img src={profile} alt="Sneha Shrestha" className={styles['hero-photo']}/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
  