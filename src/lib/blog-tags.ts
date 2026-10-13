interface TagMeta {
  label: string;
  color: string;
}

const tagMeta: Record<string, TagMeta> = {
  "inteligencia-artificial": { label: "Inteligencia artificial", color: "#f472b6" },
  "programacion": { label: "Programación", color: "#3b82f6" },
  "meta": { label: "Meta", color: "#8b5cf6" },
  "engineering": { label: "Ingeniería", color: "#14b8a6" },
  "windsurf": { label: "Windsurf", color: "#f59e0b" },
  "ides": { label: "IDEs", color: "#22c55e" },
};

const defaultColor = "#8b5cf6";
const companionColor = "#f472b6";

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
