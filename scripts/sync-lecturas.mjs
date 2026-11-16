import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origen = resolve(process.env.ATALAYA_INFORMES ?? join(raiz, "..", "atalaya", "docs", "informes"));
const destino = join(raiz, "public", "lecturas");
const contenido = join(raiz, "src", "content", "lecturas");

if (!existsSync(origen)) {
  console.error(`No existe la carpeta de informes: ${origen}`);
  process.exit(1);
}

let copiados = 0;
for (const slug of readdirSync(origen)) {
  if (!statSync(join(origen, slug)).isDirectory()) continue;

  const htmlOrigen = join(origen, slug, `${slug}.html`);
  if (!existsSync(htmlOrigen)) {
    console.warn(`· ${slug}: sin ${slug}.html, se omite`);
    continue;
  }
  if (!existsSync(join(contenido, `${slug}.md`))) {
    console.warn(`· ${slug}: falta src/content/lecturas/${slug}.md, se omite`);
    continue;
  }

  const carpeta = join(destino, slug);
  mkdirSync(carpeta, { recursive: true });

  copyFileSync(htmlOrigen, join(carpeta, "informe.html"));

  const pdfOrigen = join(origen, slug, `${slug}.pdf`);
  if (existsSync(pdfOrigen)) copyFileSync(pdfOrigen, join(carpeta, `${slug}.pdf`));

  console.log(`✓ ${slug}`);
  copiados += 1;
}

console.log(`${copiados} informe(s) sincronizados en public/lecturas/`);
