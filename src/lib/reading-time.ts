const wordsPerMinute = 200;

export function readingMinutes(body: string | undefined): number {
  const text = (body ?? "").replace(/```[\s\S]*?```/g, " ").replace(/<[^>]+>/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / wordsPerMinute));
}
