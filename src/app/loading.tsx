export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] text-[#00FF9D]">
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border border-[#00FF9D]/20 border-t-[#00FF9D]" />

        <p className="text-sm font-bold uppercase tracking-[0.5em]">
          Loading FPV System
        </p>
      </div>
    </main>
  );
}