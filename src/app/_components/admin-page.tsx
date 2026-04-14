type AdminPageProps = {
  title: string;
  description: string;
};

export default function AdminPage({ title, description }: AdminPageProps) {
  return (
    <section className="space-y-6">
      <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Admin Section
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          {title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-semibold text-slate-900">Overview</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Clean white-theme layout for fast and clear admin operations.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h3 className="text-base font-semibold text-slate-900">Status</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Team-friendly section structure ready for real backend integration.
          </p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:col-span-2 xl:col-span-1">
          <h3 className="text-base font-semibold text-slate-900">Notes</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Mobile responsive and professional design with consistent spacing.
          </p>
        </article>
      </div>
    </section>
  );
}
