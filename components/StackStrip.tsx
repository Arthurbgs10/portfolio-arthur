const tools = [
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'React', icon: null },
  { name: 'Supabase', icon: '/icons/supabase.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'n8n', icon: '/icons/n8n.svg' },
  { name: 'Google Gemini', icon: '/icons/gemini.svg' },
  { name: 'Claude', icon: '/icons/claude-ai.svg' },
  { name: 'Vercel', icon: '/icons/vercel.svg' },
  { name: 'Looker Studio', icon: '/icons/looker.svg' },
];

export function StackStrip() {
  return (
    <div className="stack-strip">
      <div className="wrap stack-row">
        {tools.map((tool) => (
          <span className="stack-item" key={tool.name}>
            {tool.icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tool.icon} alt="" width={20} height={20} />
            )}
            {tool.name}
          </span>
        ))}
      </div>
    </div>
  );
}
