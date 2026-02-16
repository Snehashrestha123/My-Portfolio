import styles from '../styles/About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles['section-label']}>About Me</div>
        <h2 className={styles['section-title']}>A bit about who I am</h2>
        <div className={styles['about-grid']}>
          <div>
            <p className={styles['about-text']}>
              I'm a passionate developer with a strong foundation in web development, particularly in the MERN stack. 
              My journey into programming started with a curiosity about how web applications work, and has evolved into 
              a professional pursuit. I enjoy solving complex problems and creating intuitive user experiences. Currently, 
              I'm expanding my skills in data visualization and exploring new technologies to stay at the forefront of web development.
            </p>
          </div>
          <div className={styles['info-grid']}>
            <div className={styles['info-card']}>
              <div className={styles['info-card-label']}>Location</div>
              <div className={styles['info-card-value']}>Kathmandu, Nepal</div>
            </div>
            <div className={styles['info-card']}>
              <div className={styles['info-card-label']}>Education</div>
              <div className={styles['info-card-value']}>BIM, Shanker Dev</div>
            </div>
            <div className={styles['info-card']}>
              <div className={styles['info-card-label']}>Focus</div>
              <div className={styles['info-card-value']}>MERN Stack</div>
            </div>
            <div className={styles['info-card']}>
              <div className={styles['info-card-label']}>Status</div>
              <div className={styles['info-card-value']} style={{ color: 'var(--accent)' }}>
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
 