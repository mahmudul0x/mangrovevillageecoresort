export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-sunset mb-4">
      <span className="w-8 h-px bg-sunset" />
      {children}
    </div>
  );
}
