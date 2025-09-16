const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeImages() {
  const inputDir = "public/images";
  const outputDir = "public/images/optimized";

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log("🖼️  Otimizando imagens...");

  try {
    const files = fs
      .readdirSync(inputDir)
      .filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of files) {
      const inputPath = path.join(inputDir, file);
      const baseName = path.parse(file).name;

      const originalSize = fs.statSync(inputPath).size;

      const webpPath = path.join(outputDir, `${baseName}.webp`);
      const avifPath = path.join(outputDir, `${baseName}.avif`);

      await sharp(inputPath).webp({ quality: 80, effort: 6 }).toFile(webpPath);

      await sharp(inputPath).avif({ quality: 70, effort: 4 }).toFile(avifPath);

      const webpSize = fs.statSync(webpPath).size;
      const avifSize = fs.statSync(avifPath).size;

      const webpSavings = (
        ((originalSize - webpSize) / originalSize) *
        100
      ).toFixed(1);
      const avifSavings = (
        ((originalSize - avifSize) / originalSize) *
        100
      ).toFixed(1);

      console.log(`📊 ${file}:`);
      console.log(
        `   WebP: ${(originalSize / 1024).toFixed(1)}KB → ${(
          webpSize / 1024
        ).toFixed(1)}KB (${webpSavings}% economia)`
      );
      console.log(
        `   AVIF: ${(originalSize / 1024).toFixed(1)}KB → ${(
          avifSize / 1024
        ).toFixed(1)}KB (${avifSavings}% economia)`
      );
    }

    console.log(`✅ ${files.length} imagens otimizadas com sucesso!`);
  } catch (error) {
    console.error("❌ Erro ao otimizar imagens:", error);
  }
}

optimizeImages();
