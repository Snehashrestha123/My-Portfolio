# Component Documentation

## Overview
This portfolio uses a component-based architecture with CSS Modules for styling. Each major section has its own component and accompanying stylesheet.

---

## Components

### Header Component
**File**: `src/components/Header.jsx`  
**Styles**: `src/styles/Header.module.css`

#### Props
None - Self-contained component

#### Features
- Fixed navigation bar
- Smooth scroll links to sections
- Social media icons with external links
- Responsive mobile menu (hidden on devices < 768px)

#### Usage
```jsx
import Header from './components/Header'
<Header />
```

#### Customization
- Update navigation links in the `nav` element
- Add/remove social media links in `nav-social` div
- Modify colors via CSS variables

---

### Hero Component
**File**: `src/components/Hero.jsx`  
**Styles**: `src/styles/Hero.module.css`

#### Props
None - Self-contained component

#### Features
- Hero introduction section
- Call-to-action buttons (primary & secondary)
- Photo/illustration placeholder
- Responsive grid layout

#### Usage
```jsx
import Hero from './components/Hero'
<Hero />
```

#### Customization
- Update intro text and bio in the component
- Change heading text
- Modify CTA button text and actions
- Replace photo placeholder with actual image

---

### About Component
**File**: `src/components/About.jsx`  
**Styles**: `src/styles/About.module.css`

#### Props
None - Self-contained component

#### Features
- About section with biography
- Info cards showing key details
- Responsive two-column layout
- Location, education, focus, and status information

#### Usage
```jsx
import About from './components/About'
<About />
```

#### Customization
- Update bio text in `about-text` paragraph
- Modify info card values
- Update label-value pairs in `info-grid`

---

### Skills Component
**File**: `src/components/Skills.jsx`  
**Styles**: `src/styles/Skills.module.css`

#### Props
None - Self-contained component

#### Features
- Categorized skill pills
- Color-coded by skill type (primary, secondary, tertiary)
- Responsive grid layout
- Hover effects on skill pills

#### Usage
```jsx
import Skills from './components/Skills'
<Skills />
```

#### Customization
- Add/remove skills in `skillCategories` object
- Change colors via CSS variables:
  - Primary (teal): `--accent`
  - Secondary (pink): `--pink`
  - Tertiary (yellow): `--yellow`

---

### Projects Component
**File**: `src/components/Projects.jsx`  
**Styles**: `src/styles/Projects.module.css`

#### Props
None - Self-contained component

#### State
- `activeFilter`: Tracks the currently selected filter

#### Features
- Project filtering by category
- Featured project highlight (full-width)
- Project cards with descriptions
- Tech stack tags
- Demo and source code links
- Responsive grid layout

#### Usage
```jsx
import Projects from './components/Projects'
<Projects />
```

#### Customization
- Add projects to the `projects` array:
```jsx
{
  id: 5,
  title: 'My Project',
  description: 'Description of the project...',
  tags: ['React', 'Node.js'],
  category: 'MERN',
  featured: false,
  demo: 'https://demo-link.com',
  code: 'https://github.com/...'
}
```
- Create new filter categories by adding them to `filters` array
- Update project data to match your actual projects

---

### Education Component
**File**: `src/components/Education.jsx`  
**Styles**: `src/styles/Education.module.css`

#### Props
None - Self-contained component

#### Features
- Education background display
- Degree and institution information
- Graduation year badge
- Clean card layout

#### Usage
```jsx
import Education from './components/Education'
<Education />
```

#### Customization
- Update degree text
- Change institution name
- Modify graduation year

---

### Contact Component
**File**: `src/components/Contact.jsx`  
**Styles**: `src/styles/Contact.module.css`

#### Props
None - Self-contained component

#### State
- `formData`: Object containing form input values

#### Features
- Contact information display
- Multiple contact methods (email, LinkedIn, GitHub)
- Functional contact form
- Form validation
- Submission handling

#### Usage
```jsx
import Contact from './components/Contact'
<Contact />
```

#### Customization
- Update contact information links
- Modify form labels and placeholder text
- Connect `handleSubmit` to your email service (Nodemailer, SendGrid, etc.)
- Customize form validation rules

---

### Footer Component
**File**: `src/components/Footer.jsx`  
**Styles**: `src/styles/Footer.module.css`

#### Props
None - Self-contained component

#### Features
- Copyright year (auto-updated)
- Social media links
- Responsive layout
- Consistent with header styling

#### Usage
```jsx
import Footer from './components/Footer'
<Footer />
```

#### Customization
- Update social media links
- Modify footer text
- Change link URLs

---

## CSS Modules Structure

Each component has a corresponding CSS Module that defines its styles. The naming convention is `ComponentName.module.css`.

### Key CSS Classes

#### Common Classes
- `.section-label` - Small uppercase label above section title
- `.section-title` - Main section heading (h2)
- `.container` - Max-width wrapper (global from index.css)

#### Component-Specific Classes
- **Header**: `.page-header`, `.nav-links`, `.nav-social`
- **Hero**: `.hero-grid`, `.hero-role`, `.hero-actions`
- **About**: `.about-grid`, `.info-grid`, `.info-card`
- **Skills**: `.skills-grid`, `.skill-pill`, `.skill-dot`
- **Projects**: `.projects-grid`, `.project-card`, `.filter-pills`
- **Contact**: `.contact-grid`, `.contact-form`, `.form-row`
- **Footer**: `.footer-inner`, `.footer-links`

### CSS Variables

Global CSS variables defined in `src/index.css`:

```css
--bg: #0F0F0F;              /* Background color */
--surface: #1A1A1A;         /* Surface/card background */
--border: #2A2A2A;          /* Border color */
--text: #E0E0E0;            /* Main text color */
--text-muted: #777;         /* Secondary text color */
--accent: #4ECDC4;          /* Primary accent (teal) */
--pink: #FF6B9D;            /* Secondary accent (pink) */
--yellow: #FFD93D;          /* Tertiary accent (yellow) */
--font: 'DM Sans', sans-serif;  /* Body font */
--mono: 'DM Mono', monospace;   /* Code/monospace font */
```

---

## Responsive Design

Components use CSS media queries to adapt to different screen sizes. Breakpoint: **768px**

### Responsive Changes
- **Hero**: 2-column grid → 1 column
- **About**: 2-column grid → 1 column
- **Projects**: Multi-column grid → 1 column
- **Contact**: 2-column grid → 1 column
- **Footer**: Flex row → Column with centered text

---

## Best Practices

1. **Component Reusability**: Keep components self-contained
2. **Props over State**: Use component state only when necessary
3. **CSS Modules**: Avoid conflicting class names
4. **Semantic HTML**: Use proper HTML elements (section, header, footer, nav)
5. **Accessibility**: Include alt text, proper labels, and ARIA attributes
6. **Performance**: Optimize images and lazy-load if needed

---

## Integration Example

```jsx
// src/App.jsx
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
```

---

## Adding New Components

1. Create component file: `src/components/YourComponent.jsx`
2. Create styles file: `src/styles/YourComponent.module.css`
3. Import into `App.jsx`
4. Add to the render structure

Example:
```jsx
// src/components/YourComponent.jsx
import styles from '../styles/YourComponent.module.css'

const YourComponent = () => {
  return (
    <section className={styles.section}>
      {/* Your content here */}
    </section>
  )
}

export default YourComponent
```

---

## Troubleshooting

### Styles not applying
- Verify CSS Module is imported correctly
- Check class name spelling in both JSX and CSS
- Ensure CSS Module file ends with `.module.css`

### Responsive layout issues
- Test with browser dev tools at different breakpoints
- Verify media queries in component CSS file
- Check that responsive classes are applied correctly

### Smooth scrolling not working
- Ensure `scroll-behavior: smooth` is set in `index.css`
- Verify section IDs match navigation href values
- Check that navigation links use proper anchor format

---
