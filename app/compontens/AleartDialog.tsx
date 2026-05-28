type AleartDialogProps = {
  eyebrow: string;
  title: string;
  description: string;
  action?: string;
};

export default function AleartDialog({
  eyebrow,
  title,
  description,
  action,
}: AleartDialogProps) {
  return (
    <aside className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-black/45">
        {eyebrow}
      </p>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/60">{description}</p>
      {action ? (
        <p className="mt-4 rounded-md bg-[#f7f4ef] px-3 py-2 text-sm font-semibold text-black">
          {action}
        </p>
      ) : null}
    </aside>
  );
}
