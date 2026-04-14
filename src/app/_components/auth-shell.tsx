import Link from "next/link";

type AuthShellProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref?: string;
  footerText: string;
  footerLinkLabel: string;
  footerLinkHref: string;
  fields: Array<{
    id: string;
    label: string;
    type?: "text" | "email" | "password";
    placeholder: string;
  }>;
};

export default function AuthShell({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
  footerText,
  footerLinkLabel,
  footerLinkHref,
  fields,
}: AuthShellProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          {subtitle}
        </p>
        <form className="mt-8 space-y-4">
          {fields.map((field) => (
            <label key={field.id} htmlFor={field.id} className="block space-y-2">
              <span className="text-sm font-medium text-slate-700">
                {field.label}
              </span>
              <input
                id={field.id}
                name={field.id}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              />
            </label>
          ))}
          {buttonHref ? (
            <Link
              href={buttonHref}
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              {buttonLabel}
            </Link>
          ) : (
            <button
              type="button"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
            >
              {buttonLabel}
            </button>
          )}
        </form>
        <p className="mt-5 text-sm text-slate-600">
          {footerText}{" "}
          <Link
            href={footerLinkHref}
            className="font-semibold text-teal-700 hover:text-teal-800"
          >
            {footerLinkLabel}
          </Link>
        </p>
      </section>
    </div>
  );
}
