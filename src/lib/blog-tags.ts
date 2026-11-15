interface TagMeta {
  label: string;
  color: string;
}

const tagMeta: Record<string, TagMeta> = {
  "inteligencia-artificial": { label: "Inteligencia artificial", color: "var(--marca-dominio-claro-ia)" },
  "programacion": { label: "Programación", color: "var(--marca-dominio-claro-data-engineering)" },
  "meta": { label: "Meta", color: "var(--marca-dominio-claro-web)" },
  "engineering": { label: "Ingeniería", color: "var(--marca-dominio-claro-movil)" },
  "windsurf": { label: "Windsurf", color: "var(--marca-dominio-claro-machine-learning)" },
  "ides": { label: "IDEs", color: "var(--marca-dominio-claro-analitica)" },
};

const defaultColor = "var(--marca-dominio-claro-data-engineering)";
const companionColor = "var(--marca-dominio-claro-web)";

export function tagLabel(tag: string): string {
  const meta = tagMeta[tag];
  if (meta) return meta.label;
  const spaced = tag.replace(/-/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function tagColor(tag: string): string {
  return tagMeta[tag]?.color ?? defaultColor;
}

// Par de colores para la portada de una entrada: el de su primera etiqueta y el de la segunda,
// o un tono compañero si solo tiene una (o si ambas comparten color).
export function postColors(tags: string[]): [string, string] {
  const first = tags[0] ? tagColor(tags[0]) : defaultColor;
  const second = tags[1] ? tagColor(tags[1]) : companionColor;
  if (second !== first) return [first, second];
  return [first, first === companionColor ? defaultColor : companionColor];
}
