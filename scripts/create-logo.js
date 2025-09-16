const sharp = require("sharp");
const fs = require("fs");

async function createLogo() {
  const width = 120;
  const height = 32;

  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#0ea5e9;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad1)" rx="8"/>
      <text x="60" y="20" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">FinBank</text>
    </svg>
  `;

  try {
    await sharp(Buffer.from(svg)).png().toFile("public/images/logo.png");

    console.log("✅ Logo criado com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao criar logo:", error);
  }
}

createLogo();
