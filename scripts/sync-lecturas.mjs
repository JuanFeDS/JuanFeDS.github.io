import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origen = resolve(process.env.ATALAYA_INFORMES ?? join(raiz, "..", "atalaya", "docs", "informes"));
const destino = join(raiz, "public", "lecturas");
const contenido = join(raiz, "src", "content", "lecturas");

const enlaceVolver = `<a href="/lecturas/" style="position:fixed;top:12px;left:12px;z-index:50;padding:.35rem .8rem;border-radius:9999px;font:600 .8rem/1.2 var(--marca-tipografia-familia-cuerpo,system-ui,sans-serif);background:var(--marca-fondo-elevado,#fff);color:var(--marca-marca-texto,#333);border:1px solid var(--marca-borde-suave,#ddd);text-decoration:none">← Lecturas</a>`;

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

  const html = readFileSync(htmlOrigen, "utf8").replace(/<body([^>]*)>/, `<body$1>\n${enlaceVolver}`);
  writeFileSync(join(carpeta, "index.html"), html);

  const pdfOrigen = join(origen, slug, `${slug}.pdf`);
  if (existsSync(pdfOrigen)) copyFileSync(pdfOrigen, join(carpeta, `${slug}.pdf`));

  console.log(`✓ ${slug}`);
  copiados += 1;
}

console.log(`${copiados} informe(s) sincronizados en public/lecturas/`);
