import { useState } from 'react'
import styles from '../styles/Projects.module.css'
import mathsgame from '../assets/mathsgame.png';
import captcha from '../assets/captcha.png';
import alarm from '../assets/alarm.png';
import temp from '../assets/temp.png';
import currency from '../assets/currency.png';
import balloon from '../assets/balloon.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    // MERN Projects
    // {
    //   id: 1,
    //   title: 'Task Manager App',
    //   description: 'A full-stack task management app with user authentication, CRUD operations, and a responsive dashboard. Built with React frontend, Express/Node API, and MongoDB database.',
    //   tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    //   category: 'MERN',
    //   featured: true,
    //   demo: 'https://example.com/task-manager-demo',
    //   code: 'https://github.com/snehashrestha123/task-manager'
    // },
    // Vanilla JS Projects
    {
      id: 2,
      title: 'Math Quiz Game',
      description: 'A fun browser-based math quiz game built with Vanilla JavaScript. Users answer questions and get instant feedback with a scoring system.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Maths-Game/',
      code: 'https://github.com/Snehashrestha123/Maths-Game',
      screenshot: mathsgame
    },
    {
      id: 3,
      title: 'Captcha Generator',
      description: 'A simple CAPTCHA generator that creates random codes and verifies user input in real time.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Captcha-Generator/',
      code: 'https://github.com/Snehashrestha123/Captcha-Generator',
      screenshot: captcha
    },
    {
      id: 4,
      title: 'Alarm',
      description: 'A simple web-based alarm clock that shows real-time hours, minutes, and seconds and lets users set, enable, and delete alarms.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Alarm/  ',
      code: 'https://github.com/Snehashrestha123/Alarm',
      screenshot: alarm
    },

    {
     id: 5,
      title: 'Temperature Converter',
      description: 'A simple temperature converter that converts values between Celsius and Fahrenheit instantly.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Temperature-Converter/',
      code: 'https://github.com/Snehashrestha123/Temperature-Converter',
      screenshot: temp
    },

     {
     id: 6,
      title: 'Currency Converter',
      description: 'A simple currency converter that converts between multiple currencies with instant results.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Currency-Converter/  ',
      code: 'https://github.com/Snehashrestha123/Currency-Converter',
      screenshot: currency
    },

    {
     id: 7,
      title: 'Balloon Pop-up Game',
      description: 'A fun click-based game where users pop balloons to score points within a limited time.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      category: 'Vanilla JS',
      featured: false,
      demo: 'https://snehashrestha123.github.io/Balloon-Pop-up-Game/',
      code: 'https://github.com/Snehashrestha123/Balloon-Pop-up-Game',
      screenshot: balloon
    },

  ]

  // const filters = ['All', 'MERN', 'Vanilla JS', 'Other']
  const filters = []
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <div className={styles['projects-header']}>
          <div>
            <div className={styles['section-label']}>Projects</div>
            <h2 className={styles['section-title']}>Things I've built</h2>
          </div>
          <div className={styles['filter-pills']}>
            {filters.map(filter => (
              <button
                key={filter}
                className={`${styles['filter-pill']} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles['projects-grid']}>
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className={`${styles['project-card']} ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles['project-thumb']}>
                {project.screenshot 
                  ? <img src={project.screenshot} alt={project.title} /> 
                  : '[ Screenshot placeholder ]'}
              </div>
              <div className={styles['project-body']}>
                <div className={styles['project-title']}>
                  {project.title}
                  {project.featured && ' ← featured'}
                </div>
                <p className={styles['project-desc']}>
                  {project.description}
                </p>
                <div className={styles['project-tags']}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles['project-tag']}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={styles['project-links']}>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles['project-link']}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {project.featured ? 'Live Demo' : 'Demo'}
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className={styles['project-link']}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    {project.featured ? 'Source Code' : 'Code'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
