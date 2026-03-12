type SectionProps = {
    id?: string;
    title: string;
    eyebrow?: string;
    children: React.ReactNode;
  };
  
  export default function Section({ id, title, eyebrow, children }: SectionProps) {
    return (
      <section id={id} className="scroll-mt-24">
        <div className="flex flex-col gap-2">
          {eyebrow ? (
            <p className="text-sm font-medium tracking-wide text-neutral-500">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title}
          </h2>
        </div>
        <div className="mt-6">{children}</div>
      </section>
    );
  }