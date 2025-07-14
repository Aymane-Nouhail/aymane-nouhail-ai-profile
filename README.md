# Aymane Nouhail - AI Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, showcasing AI/ML projects, technical blog posts, and professional experience.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Vite
- **Responsive Design**: Mobile-first approach with modern UI components
- **Technical Blog**: Markdown-based blog with syntax highlighting and Mermaid diagrams
- **Project Showcase**: Featured projects with filtering capabilities
- **Contact Integration**: Direct email integration
- **Resume Download**: One-click resume download functionality

## 📦 Dependencies

All project dependencies are managed through `package.json`. Key libraries include:

### Core Dependencies
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing

### UI Components
- **Radix UI** - Accessible headless UI components
- **Lucide React** - Beautiful icon library
- **Shadcn/UI** - Pre-built component library

### Content & Markdown
- **React Markdown** - Markdown rendering
- **Mermaid** - Diagram generation
- **Rehype/Remark** - Markdown processing plugins

### Other Features
- **React Hook Form** - Form management
- **Date-fns** - Date utilities
- **Framer Motion** - Animations (via tailwindcss-animate)

## 🛠️ Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aymane-nouhail/aymane-nouhail-ai-profile.git
   cd aymane-nouhail-ai-profile
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add your resume** (optional):
   ```bash
   # Place your resume PDF in the public directory
   cp your-resume.pdf public/Aymane_Nouhail_Resume.pdf
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

6. **Test production build** (optional):
   ```bash
   npm run preview
   ```
   **Note**: The preview server runs at `http://localhost:4173/aymane-nouhail-ai-profile/` - make sure to use the full URL with the `/aymane-nouhail-ai-profile/` path!

## 🌐 Deployment Options

### Option 1: GitHub Pages (Automated) - RECOMMENDED

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Push to main branch**:
   ```bash
   git push origin main
   ```
   
   The GitHub Action will automatically build and deploy your site.

3. **Access your site**:
   ```
   https://your-username.github.io/aymane-nouhail-ai-profile/
   ```

### Option 2: Manual GitHub Pages Deployment

1. **Build and deploy**:
   ```bash
   npm run deploy
   ```

2. **First-time setup**:
   - Go to repository settings → Pages
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch

### Option 3: Other Hosting Platforms

#### Vercel
```bash
npm install -g vercel
vercel --prod
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   └── ...             # Feature components
├── constants/          # App constants and configuration
├── data/              # Static data and content
│   └── blog-posts/    # Markdown blog posts
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
└── styles/            # Global styles

public/
├── Aymane_Nouhail_Resume.pdf  # Resume file (add your own)
└── ...                        # Static assets
```

## 🔧 Configuration

### Environment Variables
No environment variables are required for basic functionality.

### Customization
- **Content**: Edit files in `src/constants/` and `src/data/`
- **Styling**: Modify `tailwind.config.ts` and component styles
- **Blog Posts**: Add markdown files to `src/data/blog-posts/`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**:
   ```bash
   npm run lint
   npm run build
   ```

2. **Preview shows "Page not found"**:
   - Make sure to use the full URL: `http://localhost:4173/aymane-nouhail-ai-profile/`
   - Don't use just `http://localhost:4173/` - this will show a 404 error
   - This is expected behavior for GitHub Pages compatibility

3. **GitHub Pages not updating**:
   - Check Actions tab for deployment status
   - Verify GitHub Pages settings
   - Clear browser cache

4. **Resume download not working**:
   - Ensure `Aymane_Nouhail_Resume.pdf` exists in `/public` directory
   - Check file permissions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Aymane Nouhail**
- Email: Aymane.Nouhail@gmail.com
- LinkedIn: [linkedin.com/in/aymane-nouhail](https://linkedin.com/in/aymane-nouhail)
- GitHub: [github.com/aymane-nouhail](https://github.com/aymane-nouhail)

---

*Built with ❤️ using React, TypeScript, and modern web technologies*
