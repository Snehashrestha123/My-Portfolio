import styles from '../styles/Skills.module.css'

const Skills = () => {
  const skillCategories = {
    primary: [
      'React',
      'Node.js',
      'Express',
      'MongoDB'
    ],
    secondary: [
      'JavaScript',
      'HTML / CSS',
      'PHP'
    ],
    tertiary: [
      'Tableau',
      'Git / GitHub',
      'VS Code'
    ]
  }

  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <div className={styles['section-label']}>Skills & Tools</div>
        <h2 className={styles['section-title']}>What I work with</h2>

        <div className={styles['skills-grid']}>
          {skillCategories.primary.map(skill => (
            <div key={skill} className={styles['skill-pill']}>
              <span className={styles['skill-dot']}></span>
              {skill}
            </div>
          ))}
          {skillCategories.secondary.map(skill => (
            <div key={skill} className={styles['skill-pill']}>
              <span className={`${styles['skill-dot']} ${styles.secondary}`}></span>
              {skill}
            </div>
          ))}
          {skillCategories.tertiary.map(skill => (
            <div key={skill} className={styles['skill-pill']}>
              <span className={`${styles['skill-dot']} ${styles.tertiary}`}></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
