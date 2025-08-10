const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

const svgContent = `<svg width="SIZE" height="SIZE" viewBox="0 0 SIZE SIZE" xmlns="http://www.w3.org/2000/svg">
  <rect width="SIZE" height="SIZE" fill="#000000" rx="20"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="FONTSIZE" fill="white" text-anchor="middle" dominant-baseline="middle">WP</text>
</svg>`;

sizes.forEach(size => {
  const fontSize = Math.floor(size * 0.4);
  const svg = svgContent.replace(/SIZE/g, size).replace(/FONTSIZE/g, fontSize);
  
  const fileName = path.join(__dirname, '..', 'public', `icon-${size}x${size}.svg`);
  fs.writeFileSync(fileName, svg);
  console.log(`Created ${fileName}`);
});

console.log('Icon generation complete!');