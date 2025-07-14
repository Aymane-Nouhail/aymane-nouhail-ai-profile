#!/bin/bash
# Script to regenerate Open Graph image

echo "🎨 Regenerating Open Graph image..."

# Install playwright if not already installed
if ! npm list playwright >/dev/null 2>&1; then
    echo "Installing Playwright..."
    npm install -D playwright
    npx playwright install chromium
fi

# Create the HTML template with current content
cat > public/og-image-temp.html << 'EOF'
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: #0a0a0a;
            color: white;
            width: 1200px;
            height: 630px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
        }
        
        .gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #1e40af, #7c3aed, #ec4899);
            opacity: 0.1;
        }
        
        .content {
            position: relative;
            z-index: 1;
            text-align: center;
        }
        
        .name {
            font-size: 64px;
            font-weight: bold;
            margin-bottom: 20px;
            color: white;
        }
        
        .title {
            font-size: 32px;
            color: #a1a1aa;
            margin-bottom: 40px;
        }
        
        .description {
            font-size: 24px;
            color: #71717a;
            margin-bottom: 40px;
            line-height: 1.4;
        }
        
        .contact {
            font-size: 20px;
            color: #a1a1aa;
            margin-bottom: 40px;
        }
        
        .tech-stack {
            font-size: 18px;
            color: #525252;
        }
    </style>
</head>
<body>
    <div class="gradient-overlay"></div>
    <div class="content">
        <div class="name">Aymane Nouhail</div>
        <div class="title">AI Engineer & Data Scientist</div>
        <div class="description">
            Building intelligent RAG systems and production-ready AI solutions<br>
            that drive real business impact
        </div>
        <div class="contact">
            📍 Paris, France  •  💼 Available for consulting  •  📧 Aymane.Nouhail@gmail.com
        </div>
        <div class="tech-stack">
            AI • RAG • LangChain • Python • Azure • Docker • FastAPI • Machine Learning
        </div>
    </div>
</body>
</html>
EOF

# Generate the image
node -e "
import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generateOGImage() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1200, height: 630 });
  
  const htmlPath = path.join(__dirname, 'public', 'og-image-temp.html');
  await page.goto(\`file://\${htmlPath}\`);
  
  await page.waitForTimeout(1000);
  
  await page.screenshot({ 
    path: path.join(__dirname, 'public', 'og-image.png'),
    fullPage: false
  });
  
  await browser.close();
  console.log('✅ og-image.png generated successfully!');
}

generateOGImage().catch(console.error);
"

# Clean up temporary HTML file
rm public/og-image-temp.html

# Clean up playwright if it was installed for this script
if [ "$1" != "--keep-playwright" ]; then
    echo "Cleaning up Playwright..."
    npm uninstall playwright
fi

echo "✅ Open Graph image regenerated!"
