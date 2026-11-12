(() => {
  const BASE = 'https://juanfeds.com';
  const ENLACES = [
    ['projects', 'Proyectos'],
    ['tools', 'Tools'],
    ['blog', 'Blog'],
    ['makeover-monday', 'Vizs'],
    ['about', 'Sobre mí'],
  ];
  const activo = document.currentScript?.dataset.activo || 'tools';
  const raiz = document.documentElement;

  try {
    const guardado = localStorage.getItem('theme');
    if (guardado === 'dark' || (!guardado && matchMedia('(prefers-color-scheme: dark)').matches)) {
      raiz.classList.add('dark');
    }
  } catch {
    /* sin almacenamiento: queda el tema claro */
  }

  const estilos = `
:root { --alto-cabecera: 68px; }
.sitio { --s-bg:#f5f5f8; --s-superficie:#ebebf0; --s-borde:#e2e2ea; --s-texto:#0f0f1a; --s-apagado:#6b6b80; --s-morado:#8b5cf6;
  position:fixed; inset:0 0 auto 0; z-index:50; background:color-mix(in srgb,var(--s-bg) 70%,transparent);
  border-bottom:1px solid var(--s-borde); -webkit-backdrop-filter:blur(16px); backdrop-filter:blur(16px);
  font-family:'Inter',system-ui,sans-serif; transition:transform .25s ease,opacity .25s ease; }
html.dark .sitio { --s-bg:#07070f; --s-superficie:#16162a; --s-borde:#1e1e35; --s-texto:#e8e8f0; --s-apagado:#7878a0; }
.sitio *, .sitio *::before, .sitio *::after { box-sizing:border-box; }
.sitio__barra { display:flex; align-items:center; justify-content:space-between; height:var(--alto-cabecera); padding:0 1.5rem; }
.sitio__logo { font:700 1.125rem/1.75rem 'Outfit',system-ui,sans-serif; letter-spacing:-.025em; color:var(--s-texto); text-decoration:none; }
.sitio__logo span { color:var(--s-morado); }
.sitio__enlaces, .sitio__movil { display:flex; margin:0; padding:0; list-style:none; }
.sitio__enlaces { align-items:center; gap:1.5rem; }
.sitio__enlaces a, .sitio__movil a { color:var(--s-apagado); font-size:.875rem; font-weight:500; text-decoration:none; transition:color .15s ease; }
.sitio a[aria-current='page'] { color:var(--s-morado); }
.sitio__enlaces a:hover { color:var(--s-texto); }
.sitio__acciones { display:flex; align-items:center; gap:.5rem; }
.sitio__boton { display:flex; align-items:center; justify-content:center; width:36px; height:36px; padding:0;
  border:1px solid var(--s-borde); border-radius:50%; background:var(--s-superficie); color:var(--s-apagado); cursor:pointer; }
.sitio__boton--menu { display:none; }
.sitio__sol { display:none; }
html.dark .sitio__sol { display:block; }
html.dark .sitio__luna { display:none; }
.sitio__movil { flex-direction:column; gap:.25rem; padding:0 1.5rem 1rem; }
.sitio__movil[hidden] { display:none; }
.sitio__movil a { display:block; padding:.75rem 1rem; border-radius:12px; }
.sitio__movil a[aria-current='page'] { background:color-mix(in srgb,var(--s-morado) 8%,transparent); }
@media (max-width:767px) { .sitio__enlaces { display:none; } .sitio__boton--menu { display:flex; } }`;

  const fuentes = document.createElement('link');
  fuentes.rel = 'stylesheet';
  fuentes.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Outfit:wght@700&display=swap';
  document.head.appendChild(fuentes);

  const hoja = document.createElement('style');
  hoja.textContent = estilos;
  document.head.appendChild(hoja);

  const lista = (clase) =>
    `<ul class="${clase}"${clase === 'sitio__movil' ? ' id="sitio-movil" hidden' : ''}>` +
    ENLACES.map(([ruta, texto]) =>
      `<li><a href="${BASE}/${ruta}/"${ruta === activo ? ' aria-current="page"' : ''}>${texto}</a></li>`,
    ).join('') +
    '</ul>';

  const icono = (contenido, clase = '') =>
    `<svg class="${clase}" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${contenido}</svg>`;

  const montar = () => {
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<nav class="sitio" aria-label="Sitio JuanFeDS">
        <div class="sitio__barra">
          <a class="sitio__logo" href="${BASE}/">🧪 JuanFe<span>DS</span></a>
          ${lista('sitio__enlaces')}
          <div class="sitio__acciones">
            <button class="sitio__boton" id="sitio-tema" type="button" aria-label="Cambiar tema">
              ${icono('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>', 'sitio__sol')}
              ${icono('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>', 'sitio__luna')}
            </button>
            <button class="sitio__boton sitio__boton--menu" id="sitio-menu" type="button" aria-label="Abrir menú" aria-expanded="false">
              ${icono('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>')}
            </button>
          </div>
        </div>
        ${lista('sitio__movil')}
      </nav>`,
    );

    document.getElementById('sitio-tema').addEventListener('click', () => {
      const oscuro = raiz.classList.toggle('dark');
      try {
        localStorage.setItem('theme', oscuro ? 'dark' : 'light');
      } catch {
        /* sin almacenamiento: el tema solo dura esta visita */
      }
    });

    const boton = document.getElementById('sitio-menu');
    const menu = document.getElementById('sitio-movil');
    boton.addEventListener('click', () => {
      menu.hidden = !menu.hidden;
      boton.setAttribute('aria-expanded', String(!menu.hidden));
    });
  };

  if (document.body) montar();
  else document.addEventListener('DOMContentLoaded', montar);
})();
