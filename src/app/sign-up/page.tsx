import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Create your admin account
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          Register your details to start managing your dashboard securely.
        </p>
        <form className="mt-8 space-y-4">
          <label htmlFor="name" className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Full Name</span>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>
          <label htmlFor="email" className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Email Address</span>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="admin@company.com"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>
          <label htmlFor="password" className="block space-y-2">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a strong password"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
            />
          </label>
          <Link
            href="/admin-dashboard"
            className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Create Account
          </Link>
        </form>
        <p className="mt-5 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-teal-700 hover:text-teal-800">
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}