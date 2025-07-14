#!/bin/bash

# Regenerate Favicon Script
# This script regenerates the favicon.png and favicon.ico files from the favicon.svg

echo "🔄 Regenerating favicon files from SVG..."

# Check if favicon.svg exists
if [ ! -f "public/favicon.svg" ]; then
    echo "❌ Error: public/favicon.svg not found!"
    exit 1
fi

# Install dependencies if not present
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is required but not installed"
    exit 1
fi

# Create temporary script
cat > temp_favicon_gen.cjs << 'EOF'
const fs = require('fs');
const sharp = require('sharp');

async function generateFavicon() {
  try {
    const svgBuffer = fs.readFileSync('public/favicon.svg');
    
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('public/favicon.png');
    
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile('public/favicon.ico');
    
    console.log('✅ Favicon files regenerated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
  }
}

generateFavicon();
EOF

# Install sharp temporarily
npm install sharp --no-save

# Run the generation script
node temp_favicon_gen.cjs

# Clean up
rm temp_favicon_gen.cjs
npm uninstall sharp

echo "✅ Favicon regeneration complete!"
