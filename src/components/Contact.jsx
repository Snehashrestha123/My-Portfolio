// import { useState } from 'react'
// import styles from '../styles/Contact.module.css'
// import buttonStyles from '../styles/Button.module.css'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = (e) => {
//     const { id, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [id]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // TODO: Connect to email service or backend
//     console.log('Form submitted:', formData)
//     // Reset form
//     setFormData({ name: '', email: '', message: '' })
//     alert('Thank you! I will get back to you soon.')
//   }

//   return (
//     <section className={styles.contact} id="contact">
//       <div className="container">
//         <div className={styles['contact-grid']}>
//           <div className={styles['contact-info']}>
//             <div className={styles['section-label']}>Get in Touch</div>
//             <h2 className={styles['section-title']}>Let's talk</h2>
//             <p>
//               I'm currently open to full-time roles and projects. Feel free to reach out through any of these channels, or use the form.
//             </p>

//             <div className={styles['contact-links']}>
//                 {/* <a href="mailto:snehashrestha357@gmail.com" className={styles['contact-link']}>
//                 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=snehashrestha357@gmail.com&subject=Portfolio Inquiry&body=Hello Sneha," target="_blank" rel="noopener noreferrer" title="Email">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                     <polyline points="22,6 12,13 2,6"/>
//                   </svg>
//                   snehashrestha357@gmail.com
//                 </a> */}

//               <a href="https://mail.google.com/mail/?view=cm&fs=1&to=snehashrestha357@gmail.com&subject=Portfolio Inquiry&body=Hello Sneha," target="_blank" rel="noopener noreferrer" title="Email" className={styles['contact-link']}>
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" style={{ verticalAlign: 'middle', marginRight: '8px' }} >
//                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                  <polyline points="22,6 12,13 2,6" />
//                 </svg>
//                 snehashrestha357@gmail.com
//               </a>

//               <a href="https://www.linkedin.com/in/sneha-shrestha-51a704253/" className={styles['contact-link']} target="_blank" rel="noopener noreferrer">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
//                   <rect x="2" y="9" width="4" height="12"/>
//                   <circle cx="4" cy="4" r="2"/>
//                 </svg>
//                 linkedin.com/in/snehashrestha
//               </a>
//               <a href="https://github.com/snehashrestha123" className={styles['contact-link']} target="_blank" rel="noopener noreferrer">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
//                 </svg>
//                 github.com/snehashrestha123
//               </a>
//               <a href="#" className={styles['contact-link']}>
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
//                   <circle cx="12" cy="10" r="3"/>
//                 </svg>
//                 Kathmandu, Nepal
//               </a>
//             </div>
//           </div>

//           <div>
//             <form className={styles['contact-form']} onSubmit={handleSubmit}>
//               <div className={styles['form-row']}>
//                 <label className={styles['form-label']} htmlFor="name">Name</label>
//                 <input
//                   className={styles['form-input']}
//                   type="text"
//                   id="name"
//                   placeholder="Your name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className={styles['form-row']}>
//                 <label className={styles['form-label']} htmlFor="email">Email</label>
//                 <input
//                   className={styles['form-input']}
//                   type="email"
//                   id="email"
//                   placeholder="you@gmail.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className={styles['form-row']}>
//                 <label className={styles['form-label']} htmlFor="message">Message</label>
//                 <textarea
//                   className={styles['form-input']}
//                   id="message"
//                   placeholder="Tell me about your project or opportunity..."
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className={`${buttonStyles.btn} ${buttonStyles['btn-primary']} ${styles['form-submit']}`}>
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Contact


import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import buttonStyles from '../styles/Button.module.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://formspree.io/f/mqedbajy', { // <-- your Formspree URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      if (response.ok) {
        alert('Thank you! Your message has been sent.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        alert('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Error sending message. Please try again.')
      console.error(error)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles['contact-grid']}>
          <div className={styles['contact-info']}>
            <div className={styles['section-label']}>Get in Touch</div>
            <h2 className={styles['section-title']}>Let's talk</h2>
            <p>
              I'm currently open to full-time roles and projects. Feel free to reach out through any of these channels, or use the form.
            </p>

            <div className={styles['contact-links']}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=snehashrestha357@gmail.com&subject=Portfolio Inquiry&body=Hello Sneha,"
                target="_blank"
                rel="noopener noreferrer"
                title="Email"
                className={styles['contact-link']}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="24"
                  height="24"
                  style={{ verticalAlign: 'middle', marginRight: '8px' }}
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                snehashrestha357@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/sneha-shrestha-51a704253/"
                className={styles['contact-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                linkedin.com/in/snehashrestha
              </a>

              <a
                href="https://github.com/snehashrestha123"
                className={styles['contact-link']}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                github.com/snehashrestha123
              </a>

              <a href="#" className={styles['contact-link']}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Kathmandu, Nepal
              </a>
            </div>
          </div>

          <div>
            <form className={styles['contact-form']} onSubmit={handleSubmit}>
              <div className={styles['form-row']}>
                <label className={styles['form-label']} htmlFor="name">Name</label>
                <input
                  className={styles['form-input']}
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles['form-row']}>
                <label className={styles['form-label']} htmlFor="email">Email</label>
                <input
                  className={styles['form-input']}
                  type="email"
                  id="email"
                  placeholder="you@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles['form-row']}>
                <label className={styles['form-label']} htmlFor="message">Message</label>
                <textarea
                  className={styles['form-input']}
                  id="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${buttonStyles.btn} ${buttonStyles['btn-primary']} ${styles['form-submit']}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
