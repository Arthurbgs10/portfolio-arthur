const tools = [
  'Next.js',
  'React',
  'Supabase',
  'PostgreSQL',
  'n8n',
  'Google Gemini',
  'Vercel',
  'Looker Studio',
];

export function StackStrip() {
  return (
    <div className="stack-strip">
      <div className="wrap stack-row">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </div>
  );
}
