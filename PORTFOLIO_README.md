# Aymane Nouhail - AI Portfolio Website

A modern, responsive portfolio website for a Generative AI Data Scientist, built with React, TypeScript, and Tailwind CSS. Features a dark theme optimized for showcasing AI/ML projects and technical expertise.

## 🚀 Features

### Design & UX
- **Modern Dark Theme**: AI-inspired design with electric blue and cyan accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Gradient shifts, hover effects, and scroll animations
- **Interactive Elements**: Project filtering, smooth navigation, and form interactions

### Sections
- **Hero Section**: Prominent introduction with social links and CTA buttons
- **About**: Personal story, education, skills, and current focus areas
- **Projects**: Filterable showcase of AI/ML projects with detailed descriptions
- **Blog**: Technical articles and tutorials (ready for content)
- **Contact**: Professional contact form with multiple contact methods

### Technical Features
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and semantic structure
- **Performance**: Optimized animations, lazy loading ready, and efficient rendering
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui component library
- **Styling**: Custom design system with CSS variables
- **Icons**: Lucide React icons
- **Fonts**: Inter (UI) and JetBrains Mono (code)
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Navigation.tsx   # Main navigation component
│   ├── HeroSection.tsx  # Landing hero section
│   ├── AboutSection.tsx # About me section
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── BlogSection.tsx  # Blog/articles section
│   ├── ContactSection.tsx # Contact form
│   └── Footer.tsx       # Site footer
├── pages/
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css           # Global styles and design system
└── main.tsx            # Application entry point
```

## 🎨 Design System

The portfolio uses a comprehensive design system defined in `src/index.css`:

### Colors (HSL)
- **Primary**: Electric blue (#3B82F6) for CTAs and highlights
- **Accent**: Vibrant cyan (#06D6A0) for secondary highlights  
- **Background**: Dark slate (#0F172A) for main background
- **Cards**: Slightly lighter dark (#1E293B) for content areas

### Typography
- **Headings**: Inter font family, semibold weight
- **Body**: Inter font family, regular weight
- **Code**: JetBrains Mono for technical content

### Animations
- **Gradient Shift**: Animated background gradients
- **Hover Effects**: Scale and glow animations
- **Page Transitions**: Smooth scroll and fade animations

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment to GitHub Pages

### Option 1: Jekyll Conversion (Recommended for GitHub Pages)

To deploy on GitHub Pages with Jekyll:

1. **Convert to Jekyll structure**:
   ```
   _layouts/
     default.html
   _includes/
     navigation.html
     hero.html
     about.html
     projects.html
     blog.html
     contact.html
     footer.html
   _sass/
     main.scss
   assets/
     css/
     js/
     images/
   _config.yml
   index.html
   ```

2. **Create `_config.yml`**:
   ```yaml
   title: "Aymane Nouhail - AI Portfolio"
   description: "Generative AI Data Scientist"
   baseurl: ""
   url: "https://yourusername.github.io"
   
   markdown: kramdown
   highlighter: rouge
   
   plugins:
     - jekyll-sitemap
     - jekyll-seo-tag
   ```

3. **Convert React components to Liquid templates**
4. **Update styling to use Jekyll/Sass structure**
5. **Enable GitHub Pages in repository settings**

### Option 2: Static Export + GitHub Actions

1. **Add build script for static export**:
   ```json
   {
     "scripts": {
       "build:static": "vite build && cp -r dist/* ."
     }
   }
   ```

2. **Create `.github/workflows/deploy.yml`**:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages with GitHub Actions source**

## 📱 Responsive Design

The portfolio is built mobile-first with breakpoints:
- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (adjusted spacing and layout)
- **Desktop**: > 1024px (full multi-column layout)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements  
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for all interactive elements
- Screen reader friendly content structure

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `src/components/ProjectsSection.tsx`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description...',
  techStack: ['Tech1', 'Tech2'],
  categories: ['Category1', 'Category2'],
  achievements: ['Achievement 1', 'Achievement 2'],
  demoUrl: 'https://demo.com',
  githubUrl: 'https://github.com/user/repo',
  featured: true
}
```

### Updating Contact Information
Modify the contact details in:
- `src/components/HeroSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/Footer.tsx`

### Changing Colors
Update CSS variables in `src/index.css`:

```css
:root {
  --primary: 217 91% 60%;        /* Main brand color */
  --accent: 180 100% 70%;        /* Secondary accent */
  --background: 240 10% 3.9%;    /* Main background */
  /* ... other colors */
}
```

## 📈 SEO Features

- Meta tags for social sharing
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized page titles and descriptions
- Sitemap generation ready
- Open Graph tags for social media

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all TypeScript types are correct
2. **Styling Issues**: Check that CSS variables are properly defined
3. **Component Errors**: Verify all imports are correct
4. **Performance**: Use React DevTools to identify render issues

### Development Tips

- Use `npm run dev` for hot reloading during development
- Check browser console for any errors
- Use React DevTools browser extension for debugging
- Validate HTML and check accessibility with browser tools

## 📄 License

This portfolio template is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**