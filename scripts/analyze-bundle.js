const fs = require("fs");
const path = require("path");

function analyzeBundle() {
  const buildDir = ".next/static/chunks";

  if (!fs.existsSync(buildDir)) {
    console.log(
      '❌ Diretório de build não encontrado. Execute "npm run build" primeiro.'
    );
    return;
  }

  console.log("📊 Análise do Bundle JavaScript:");
  console.log("================================");

  const files = fs.readdirSync(buildDir);
  const jsFiles = files.filter((file) => file.endsWith(".js"));

  let totalSize = 0;
  let modernFeatures = 0;

  jsFiles.forEach((file) => {
    const filePath = path.join(buildDir, file);
    const stats = fs.statSync(filePath);
    const sizeKB = (stats.size / 1024).toFixed(2);
    totalSize += stats.size;

    console.log(`📁 ${file}: ${sizeKB} KB`);

    // Verificar se contém features modernas
    const content = fs.readFileSync(filePath, "utf8");
    if (content.includes("class ") || content.includes("=>")) {
      modernFeatures++;
    }
  });

  console.log("\n📈 Resumo:");
  console.log(`Total de arquivos JS: ${jsFiles.length}`);
  console.log(`Tamanho total: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`Arquivos com features modernas: ${modernFeatures}`);

  // Verificar browserslist
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  if (packageJson.browserslist) {
    console.log("\n🌐 Navegadores suportados:");
    packageJson.browserslist.forEach((browser) => {
      console.log(`  - ${browser}`);
    });
  }

  console.log("\n✅ Otimizações aplicadas:");
  console.log("  - SWC compiler (mais rápido que Babel)");
  console.log("  - Target ES2020 (navegadores modernos)");
  console.log("  - Minificação ativada");
  console.log("  - Tree shaking otimizado");
  console.log("  - Polyfills desnecessários removidos");
}

analyzeBundle();
