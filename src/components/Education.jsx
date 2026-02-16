import styles from '../styles/Education.module.css'

const Education = () => {
  return (
    <section className={styles.education} id="education">
      <div className="container">
        <div className={styles['section-label']}>Education</div>
        <h2 className={styles['section-title']}>Background</h2>
        <div className={styles['edu-card']}>
          <div>
            <div className={styles['edu-degree']}>Bachelor in Information Management</div>
            <div className={styles['edu-college']}>Shanker Dev Campus, Tribhuvan University, Putalisadak</div>
          </div>
          <div className={styles['edu-year']}>2022 – Present</div>
        </div>

         <div className={styles['edu-card']}>
          <div>
            <div className={styles['edu-degree']}>Higher Secondary Education</div>
            <div className={styles['edu-college']}>United Academy, Kumaripati, Lalitpur</div>
          </div>
          <div className={styles['edu-year']}>2020 – 2022</div>
        </div>

         <div className={styles['edu-card']}>
          <div>
            <div className={styles['edu-degree']}>Secondary Education Examination</div>
            <div className={styles['edu-college']}>Holy Vision Higher Secondary Education, Tahachal, Kathmandu</div>
          </div>
          <div className={styles['edu-year']}>2006 – 2019</div>
        </div>

      </div>
    </section>
  )
}

export default Education
