export const domainLabel: Record<string, string> = {
  "data-engineering": "Data Engineering",
  "machine-learning": "Machine Learning",
  "ai": "AI",
  "analytics": "Analytics",
  "web": "Web",
  "mobile": "Mobile",
};

export const domainGradient: Record<string, string> = {
  "data-engineering": "linear-gradient(135deg, #14b8a6 0%, #3b82f6 100%)",
  "machine-learning": "linear-gradient(135deg, #8b5cf6 0%, #f472b6 100%)",
  "ai":               "linear-gradient(135deg, #f472b6 0%, #8b5cf6 100%)",
  "analytics":        "linear-gradient(135deg, #3b82f6 0%, #14b8a6 100%)",
  "web":              "linear-gradient(135deg, #14b8a6 0%, #8b5cf6 100%)",
  "mobile":           "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
};

export const domainColor: Record<string, string> = {
  "data-engineering": "#14b8a6",
  "machine-learning": "#8b5cf6",
  "ai":               "#f472b6",
  "analytics":        "#3b82f6",
  "web":              "#14b8a6",
  "mobile":           "#8b5cf6",
};

export const levelName: Record<number, string> = {
  1: "Standalone Script",
  2: "Static App",
  3: "Basic Backend",
  4: "Distributed System",
  5: "Complex Platform",
};

export const levelColor: Record<number, string> = {
  1: "var(--level-1)",
  2: "var(--level-2)",
  3: "var(--level-3)",
  4: "var(--level-4)",
  5: "var(--level-5)",
};

export const levelDot: Record<number, string> = {
  1: "🟢", 2: "🔵", 3: "🟡", 4: "🟠", 5: "🔴",
};

export const levelDesc: Record<number, string> = {
  1: "Nivel 1 · Standalone Script",
  2: "Nivel 2 · Static App",
  3: "Nivel 3 · Basic Backend",
  4: "Nivel 4 · Distributed System",
  5: "Nivel 5 · Complex Platform",
};

// Etiqueta completa — se usa donde hay espacio (detalle de proyecto).
export const flagLabel: Record<string, string> = {
  "multiplatform":     "📱 Multiplataforma",
  "advanced-security": "🔐 Seguridad avanzada",
  "realtime":          "⚡ Tiempo real",
  "data-intensive":    "📊 Data-intensive",
  "cloud-native":      "☁️ Cloud-native",
  "payments":          "💰 Pagos",
  "high-concurrency":  "🌍 Alta concurrencia",
};

// Etiqueta corta — deriva de flagLabel, para espacios reducidos (dorso de la card).
export const flagLabelShort: Record<string, string> = {
  "multiplatform":     "📱 Multi",
  "advanced-security": "🔐 Seg",
  "realtime":          "⚡ RT",
  "data-intensive":    "📊 Data",
  "cloud-native":      "☁️ Cloud",
  "payments":          "💰 Pagos",
  "high-concurrency":  "🌍 Concurrencia",
};

export const flagDescription: Record<string, string> = {
  "multiplatform":     "Disponible en web y móvil",
  "advanced-security": "OAuth, roles y permisos avanzados",
  "realtime":          "Comunicación en tiempo real (WebSockets, SSE, streaming)",
  "data-intensive":    "Big data o pipelines de datos complejos",
  "cloud-native":      "Infraestructura como código, autoscaling",
  "payments":          "Pagos o monetización integrada",
  "high-concurrency":  "Diseñado para alta concurrencia",
};

export const matrixDims = [
  { key: "architecture",   emoji: "🧱", short: "Arch",  label: "Architecture" },
  { key: "data",           emoji: "📊", short: "Data",  label: "Data" },
  { key: "infrastructure", emoji: "⚙️", short: "Infra", label: "Infrastructure" },
  { key: "ai",             emoji: "🤖", short: "AI",    label: "AI" },
] as const;

export const techCategoryMap: Record<string, string> = {
  // Lenguajes
  "Python": "Lenguajes", "SQL": "Lenguajes", "TypeScript": "Lenguajes",
  "JavaScript": "Lenguajes", "Bash": "Lenguajes", "R": "Lenguajes",
  "Go": "Lenguajes", "Rust": "Lenguajes", "Java": "Lenguajes",
  // ML / IA
  "PyTorch": "ML / IA", "TensorFlow": "ML / IA", "scikit-learn": "ML / IA",
  "pandas": "ML / IA", "NumPy": "ML / IA", "LangChain": "ML / IA",
  "OpenAI": "ML / IA", "HuggingFace": "ML / IA", "Pinecone": "ML / IA",
  "Weaviate": "ML / IA", "FAISS": "ML / IA",
  // Backend
  "FastAPI": "Backend", "Node.js": "Backend", "Express": "Backend",
  "PostgreSQL": "Backend", "MySQL": "Backend", "Redis": "Backend",
  "MongoDB": "Backend", "Supabase": "Backend", "GraphQL": "Backend",
  "REST": "Backend", "Slack API": "Backend",
  // Frontend
  "React": "Frontend", "React Native": "Frontend", "Expo": "Frontend",
  "Next.js": "Frontend", "Vue": "Frontend", "Astro": "Frontend",
  "Recharts": "Frontend", "Tailwind": "Frontend",
  // Cloud & Data
  "AWS": "Cloud & Data", "GCP": "Cloud & Data", "Azure": "Cloud & Data",
  "BigQuery": "Cloud & Data", "Airflow": "Cloud & Data", "Docker": "Cloud & Data",
  "Kubernetes": "Cloud & Data", "Terraform": "Cloud & Data",
  "Power BI": "Cloud & Data", "dbt": "Cloud & Data", "Spark": "Cloud & Data",
};

export const categoryOrder = ["Lenguajes", "ML / IA", "Backend", "Frontend", "Cloud & Data"];

export const categoryColor: Record<string, string> = {
  "Lenguajes":    "var(--color-aurora-purple)",
  "ML / IA":      "var(--color-aurora-teal)",
  "Backend":      "var(--color-aurora-blue)",
  "Frontend":     "var(--color-cat-frontend)",
  "Cloud & Data": "var(--color-cat-cloud)",
  "Otros":        "var(--color-text-muted)",
};
