# Portfolio Website

A modern, responsive personal portfolio website built with React and Vite. This project showcases a clean, professional design with a comprehensive component-based architecture.

## 🎯 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modular Components**: Each section is a separate, reusable React component
- **CSS Modules**: Scoped styling to prevent conflicts
- **Dark Theme**: Professional dark theme with accent colors
- **Smooth Scrolling**: Navigate sections with smooth scroll behavior
- **Project Filtering**: Filter projects by category (MERN, Vanilla JS, Other)
- **Contact Form**: Functional contact form with validation
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section with CTA buttons
│   ├── About.jsx       # About me section with info cards
│   ├── Skills.jsx      # Skills grid with categorized skills
│   ├── Projects.jsx    # Projects section with filtering
│   ├── Education.jsx   # Education background
│   ├── Contact.jsx     # Contact section with form
│   └── Footer.jsx      # Footer with links
├── styles/             # CSS Modules
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── Button.module.css
│   ├── About.module.css
│   ├── Skills.module.css
│   ├── Projects.module.css
│   ├── Contact.module.css
│   ├── Education.module.css
│   └── Footer.module.css
├── assets/             # Images and static files (placeholder)
├── App.jsx             # Main app component
├── index.css           # Global styles and CSS variables
└── main.jsx            # React entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The application will open at `http://localhost:3000`

## 🛠️ Development

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build

### Adding a New Section

1. Create a new component in `src/components/YourSection.jsx`
2. Create the corresponding style file in `src/styles/YourSection.module.css`
3. Import and add the component to `src/App.jsx`

### Customization

#### Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent: #4ECDC4;
  --bg: #0F0F0F;
  --text: #E0E0E0;
  /* ... more variables */
}
```

#### Content
Update content directly in component files:
- **Header**: Update navigation links in `Header.jsx`
- **Hero**: Update intro text and bio in `Hero.jsx`
- **About**: Update about text and info cards in `About.jsx`
- **Skills**: Modify skill categories in `Skills.jsx`
- **Projects**: Add projects in `Projects.jsx`
- **Contact**: Update contact info in `Contact.jsx`

## 📝 Key Components

### Header
- Fixed navigation bar with smooth scrolling
- Social media links (GitHub, LinkedIn, Email)
- Responsive mobile menu

### Hero
- Eye-catching introduction section
- Primary and secondary CTA buttons
- Photo area placeholder

### About
- Professional bio section
- Info cards displaying key details
- Responsive two-column layout

### Skills
- Categorized skill pills
- Color-coded by skill type (primary/secondary/tertiary)
- Grid layout that adapts to screen size

### Projects
- Project filtering by category
- Featured project highlight
- Project cards with descriptions, tags, and links
- Both demo and source code links

### Contact
- Multiple contact methods (email, LinkedIn, GitHub)
- Functional contact form
- Form validation and submission handling

## 🎨 Design System

### Colors
- **Primary Accent**: #4ECDC4 (Teal)
- **Secondary Accent**: #FF6B9D (Pink)
- **Tertiary Accent**: #FFD93D (Yellow)
- **Background**: #0F0F0F (Dark)
- **Surface**: #1A1A1A (Slightly lighter)
- **Text**: #E0E0E0 (Light gray)

### Typography
- **Font Family**: DM Sans (body), DM Mono (code/labels)
- **Font Sizes**: Ranging from 11px (labels) to 52px (h1)

### Spacing
- Base unit: 8px
- Container max-width: 1200px
- Container padding: 32px (desktop), 16px (mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet/Desktop**: ≥ 768px

## 🔗 Links to Update

Before deploying, update the following:

1. **Email**: Replace `sneha@email.com` in Header and Contact
2. **GitHub**: Update GitHub profile link
3. **LinkedIn**: Update LinkedIn profile URL
4. **Resume/CV**: Add actual CV file download link
5. **Project Links**: Add real project demo and source code URLs
6. **OG Image**: Add social sharing preview image

## 📦 Dependencies

- **React**: ^18.2.0 - UI library
- **React DOM**: ^18.2.0 - React rendering
- **Vite**: ^5.0.8 - Build tool and dev server
- **@vitejs/plugin-react**: ^4.2.1 - React plugin for Vite

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sneha Shrestha**
- Email: sneha@email.com
- GitHub: [@snehashrestha123](https://github.com/snehashrestha123)
- LinkedIn: [snehashrestha](https://linkedin.com/in/snehashrestha)

---

**Note**: This is a modern portfolio starter template. Customize it with your own content, projects, and links to make it truly yours!
