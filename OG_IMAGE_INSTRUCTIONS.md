# Open Graph Image and Favicon Instructions

## Current Setup
- The project uses `/public/og-image.png` as the Open Graph image
- This PNG is referenced in the HTML meta tags for social media sharing
- The image is 1200x630 pixels with your professional branding
- The favicon uses a creative "A/N" design with neural network connection representing "AI"

## Current Image Content
The Open Graph image displays:
- **Your name**: "Aymane Nouhail" in large, bold text
- **Title**: "Generative AI Data Scientist" 
- **Description**: "Building intelligent RAG systems and production-ready AI solutions that drive real business impact"
- **Contact info**: Paris, France • Available for consulting • Your email
- **Tech stack**: AI • RAG • LangChain • Python • Azure • Docker • FastAPI • Machine Learning
- **Design**: Professional dark theme with gradient accents

## Favicon Design
The favicon features:
- **Creative "A/N" logo** where A and N represent your initials
- **Neural network connection** in the center that visually represents "AI"
- **Gradient design** matching your brand colors
- **Identical design** between favicon and navigation logo for consistency

## How to Update the Images

### Option 1: Update Open Graph Image
If you want to change the text content:

1. **Edit the content** in a temporary HTML file (the script will guide you)
2. **Run the regeneration script**:
   ```bash
   ./regenerate-og-image.sh
   ```

### Option 2: Update Favicon
If you want to change the favicon design:

1. **Edit the SVG** in `/public/favicon.svg`
2. **Run the regeneration script**:
   ```bash
   ./regenerate-favicon.sh
   ```
3. **Update the navigation logo** in `/src/components/Navigation.tsx` to match

### Option 3: Replace with Custom Images
If you want to use completely different images:

1. **Create your image** (must be 1200x630 pixels)
2. **Replace the file**: Save it as `/public/og-image.png`
3. **No need to update meta tags** - they already point to the correct file

### Option 3: Edit Text Content Manually
To change the displayed text:

1. **Update your contact info** in `/src/constants/index.ts` if needed
2. **Modify the title/description** in `/index.html` meta tags
3. **Regenerate the image** using the script

## Current Meta Tags
The HTML file includes these social media meta tags:
- `og:image` - for Facebook, LinkedIn, etc.
- `twitter:image` - for Twitter/X  
- Both point to: `https://aymane-nouhail.github.io/aymane-nouhail-ai-profile/og-image.png`

## Testing Your Changes
- **Twitter Card Validator**: Test how your link appears on Twitter
- **Facebook Sharing Debugger**: Test for other social platforms
- **LinkedIn**: Also uses these Open Graph tags
