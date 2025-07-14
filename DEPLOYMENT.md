# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your AI portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Quick Start (Automated Deployment)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"
   - Click "Save"

3. **That's it!** 🎉 
   - Your site will be available at: `https://your-username.github.io/aymane-nouhail-ai-profile/`
   - The GitHub Action will automatically build and deploy on every push to main

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build and deploy manually
npm run deploy
```

Then in GitHub Settings > Pages, select "Deploy from a branch" and choose "gh-pages".

## Troubleshooting

### Common Issues

1. **Action fails**: Check the Actions tab in your repository for error details
2. **Site not updating**: Clear your browser cache and wait a few minutes
3. **404 errors**: Make sure the base path is correctly set in vite.config.ts

### Checking Deployment Status

- Go to your repository on GitHub
- Click the "Actions" tab
- Look for the "Deploy to GitHub Pages" workflow
- Green checkmark = successful deployment ✅
- Red X = failed deployment ❌

## All Dependencies Included

✅ All libraries are already included in `package.json`:
- **UI Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Radix UI components
- **Build Tool**: Vite
- **Routing**: React Router
- **Markdown**: React Markdown + Mermaid diagrams
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Deployment**: gh-pages

No additional setup required! 🎯

## Support

If you encounter any issues:
1. Check the [GitHub Actions documentation](https://docs.github.com/en/actions)
2. Review the [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Look at the workflow file in `.github/workflows/deploy.yml`

---

**Your portfolio will be live at**: `https://your-username.github.io/aymane-nouhail-ai-profile/`
