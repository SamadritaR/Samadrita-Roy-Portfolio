type WorkCardProps = {
    title: string;
    summary: string;
    impact: string;
    stack: string;
    tag?: string;
  };
  
  export default function WorkCard({
    title,
    summary,
    impact,
    stack,
    tag,
  }: WorkCardProps) {
    return (
      <div className="rounded-2xl border border-neutral-200/70 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-semibold tracking-tight">{title}</h3>
            {tag ? (
              <p className="mt-1 text-xs font-medium text-neutral-500">{tag}</p>
            ) : null}
          </div>
          <span className="rounded-full border border-neutral-200 px-2 py-1 text-xs text-neutral-600">
            Case File
          </span>
        </div>
  
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{summary}</p>
  
        <div className="mt-4 rounded-xl bg-neutral-50 p-3">
          <p className="text-xs font-medium text-neutral-500">Impact</p>
          <p className="mt-1 text-sm font-semibold text-neutral-900">{impact}</p>
        </div>
  
        <div className="mt-4">
          <p className="text-xs font-medium text-neutral-500">Stack</p>
          <p className="mt-1 text-sm text-neutral-800">{stack}</p>
        </div>
      </div>
    );
  }